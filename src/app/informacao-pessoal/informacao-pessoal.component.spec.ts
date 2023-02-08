import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { InformacaoPessoalComponent } from './informacao-pessoal.component';

describe('InformacaoPessoalComponent', () => {

  let component: InformacaoPessoalComponent = new InformacaoPessoalComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        InformacaoPessoalComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(InformacaoPessoalComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Informação Pessoal foi criado com dados', () => {

    component.dadoPessoal = {
      nome: 'João Lucas', duplicarContaAplicacao: false,
      duplicarContaCorrente: false, contaAplicacao: '5512932-8',
      contaCorrente: '718069-4', situacaoCpf: true, cpf: '77498258005'
    };

    expect(component.dadoPessoal).toBeTruthy();
  })

  it('Deve ter um título com a situação cadastral', () => {
    const fixture = TestBed.createComponent(InformacaoPessoalComponent);

    fixture.detectChanges();

    let cadastral = fixture.debugElement.query(By.css('.card-title')).nativeElement;

    expect(cadastral.innerText).toContain('Situação cadastral do CPF');
  })

});
