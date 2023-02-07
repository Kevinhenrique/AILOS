import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidaCpfComponent } from './valida-cpf/valida-cpf.component';
import { HttpClientModule } from '@angular/common/http';
import { DadosPessoaisService } from './servico/dados-pessoais.service';
import { InformacaoPessoalComponent } from './informacao-pessoal/informacao-pessoal.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ValidaCpfComponent,
    InformacaoPessoalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserAnimationsModule

  ],
  providers: [DadosPessoaisService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
