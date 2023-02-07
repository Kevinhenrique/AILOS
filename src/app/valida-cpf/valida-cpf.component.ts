import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosPessoais } from '../parametros/dados-pessoais.component';
import { DadosPessoaisService } from '../servico/dados-pessoais.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-valida-cpf',
  templateUrl: './valida-cpf.component.html',
  styleUrls: ['./valida-cpf.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class ValidaCpfComponent implements OnInit {
  ativaCarregamento: boolean = false;
  desabilitaConsulta: boolean = true;
  dados: DadosPessoais | null;
  constructor(private formBuilder: FormBuilder, public buscaDadosServico: DadosPessoaisService) { }

  formulario: FormGroup;
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      cpf: [null, [Validators.required, Validators.maxLength(11), this.validaCpf()]]
    })

    console.log(this.formulario)
  }

  consultar() {
    this.ativaCarregamento = true;
    this.buscaDadosServico.consultaDadosPessoais(this.formulario.get('cpf')?.value).subscribe({
      next: (dados) => {
        this.dados = dados;
        this.ativaCarregamento = false;
      },
      error: (err: any) => {
        this.dados = null;
        this.ativaCarregamento = false;
        console.error("Error: " + err.message);
      }
    })

  }

  validaCpf() {
    return (control: AbstractControl): Validators => {
      const cpf = control.value;
      if (cpf) {

        let numbers, digits, sum, i, result, equalDigits;
        equalDigits = 1;

        if (cpf.length < 11) {
          this.desabilitaConsulta = true;
          return { cpfInvalido: true };
        } else this.desabilitaConsulta = !this.desabilitaConsulta

        for (i = 0; i < cpf.length - 1; i++) {
          if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
            equalDigits = 0;
            break;
          }
        }

        if (!equalDigits) {
          numbers = cpf.substring(0, 9);
          digits = cpf.substring(9);
          sum = 0;
          for (i = 10; i > 1; i--) {
            sum += numbers.charAt(10 - i) * i;
          }

          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(0))) {
            this.desabilitaConsulta = true;
            return { cpfInvalido: true };
          }
          numbers = cpf.substring(0, 10);
          sum = 0;

          for (i = 11; i > 1; i--) {
            sum += numbers.charAt(11 - i) * i;
          }
          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(1))) {
            this.desabilitaConsulta = true;
            return { cpfInvalido: true };
          }
          return { cpfInvalido: false };
        } else {
          this.desabilitaConsulta = true;
          return { cpfInvalido: true };
        }
      }
      return { cpfInvalido: false };
    }

  }
}
