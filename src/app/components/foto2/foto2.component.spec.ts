import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto2Component } from './foto2.component';

describe('Foto2Component', () => {
  let component: Foto2Component;
  let fixture: ComponentFixture<Foto2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
