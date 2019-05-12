import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto7Component } from './foto7.component';

describe('Foto7Component', () => {
  let component: Foto7Component;
  let fixture: ComponentFixture<Foto7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
