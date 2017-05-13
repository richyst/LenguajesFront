import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTemaComponent } from './formulario-tema.component';

describe('FormularioTemaComponent', () => {
  let component: FormularioTemaComponent;
  let fixture: ComponentFixture<FormularioTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
