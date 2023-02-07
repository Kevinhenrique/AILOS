import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DadosPessoaisService } from '../servico/dados-pessoais.service';

import { ValidaCpfComponent } from './valida-cpf.component';

@NgModule({
  declarations: [
    ValidaCpfComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    BrowserAnimationsModule
  ],
  providers: [DadosPessoaisService],
  bootstrap: [ValidaCpfComponent]
})
export class ValidaCpfModule { }
