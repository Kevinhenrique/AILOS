import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { InformacaoPessoalComponent } from './informacao-pessoal/informacao-pessoal.component';
import { DadosPessoaisService } from './servico/dados-pessoais.service';
import { ValidaCpfComponent } from './valida-cpf/valida-cpf.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatStepperModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        ValidaCpfComponent,
        InformacaoPessoalComponent
      ],
      providers: [DadosPessoaisService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
