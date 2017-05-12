import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResMateriasComponent } from './res-materias.component';

describe('ResMateriasComponent', () => {
  let component: ResMateriasComponent;
  let fixture: ComponentFixture<ResMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
