import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResTemasComponent } from './res-temas.component';

describe('ResTemasComponent', () => {
  let component: ResTemasComponent;
  let fixture: ComponentFixture<ResTemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResTemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
