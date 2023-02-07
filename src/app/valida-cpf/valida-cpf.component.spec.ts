import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatStepperModule } from '@angular/material/stepper';
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
        BrowserAnimationsModule
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

});
