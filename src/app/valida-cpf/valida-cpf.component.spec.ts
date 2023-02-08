import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DadosPessoaisService } from '../servico/dados-pessoais.service';
import { ValidaCpfComponent } from './valida-cpf.component';

describe('ValidaCpfComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatStepperModule,
        BrowserAnimationsModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
      ],
      declarations: [
        ValidaCpfComponent
      ],
      providers: [DadosPessoaisService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ValidaCpfComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Verifica se existe uma class para CPF', () => {
    const fixture = TestBed.createComponent(ValidaCpfComponent);

    fixture.detectChanges();

    let cpf = fixture.debugElement.query(By.css('.campoCpf')).nativeElement;

    expect(cpf.innerText).toContain('CPF');
  })

  it('Valida se há algum dados na Classe DadosPessoais', () => {
    const fixture = TestBed.createComponent(ValidaCpfComponent);

    fixture.detectChanges();
    let component = fixture.componentInstance;
    expect(component.dados).toBeUndefined();
  })


  it('Verifica se foi chamado o metodo consultaDadosPessoais', () => {
    const fixture = TestBed.createComponent(ValidaCpfComponent);

    fixture.detectChanges();
    let component = fixture.componentInstance;

    component.formulario.get('cpf')?.setValue('42456809033');

    component.consultar();

    expect(component.ativaCarregamento).toEqual(false);
  })
});
