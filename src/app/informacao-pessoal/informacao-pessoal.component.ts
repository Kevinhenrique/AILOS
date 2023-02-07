import { Component, Input } from '@angular/core';
import { DadosPessoais } from '../parametros/dados-pessoais.component';

@Component({
  selector: 'app-informacao-pessoal',
  templateUrl: './informacao-pessoal.component.html',
  styleUrls: ['./informacao-pessoal.component.css']
})
export class InformacaoPessoalComponent {

  @Input() dadoPessoal: DadosPessoais | null;

  constructor() { 
    
  }
}
