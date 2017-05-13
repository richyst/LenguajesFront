import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTareaComponent } from './formulario-tarea.component';

describe('FormularioTareaComponent', () => {
  let component: FormularioTareaComponent;
  let fixture: ComponentFixture<FormularioTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
