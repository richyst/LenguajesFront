import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMateriaComponent } from './editar-materia.component';

describe('EditarMateriaComponent', () => {
  let component: EditarMateriaComponent;
  let fixture: ComponentFixture<EditarMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
