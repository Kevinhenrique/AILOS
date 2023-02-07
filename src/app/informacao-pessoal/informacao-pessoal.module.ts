import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InformacaoPessoalComponent } from './informacao-pessoal.component';

@NgModule({
  declarations: [
    InformacaoPessoalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [InformacaoPessoalComponent]
})
export class InformacaoPessoalModule { }
