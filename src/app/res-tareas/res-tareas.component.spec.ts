import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResTareasComponent } from './res-tareas.component';

describe('ResTareasComponent', () => {
  let component: ResTareasComponent;
  let fixture: ComponentFixture<ResTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
