import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotos7Component } from './fotos7.component';

describe('Fotos7Component', () => {
  let component: Fotos7Component;
  let fixture: ComponentFixture<Fotos7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fotos7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fotos7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
