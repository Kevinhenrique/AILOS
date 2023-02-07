import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InformacaoPessoalComponent } from './informacao-pessoal.component';

describe('InformacaoPessoalComponent', () => {
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

});
