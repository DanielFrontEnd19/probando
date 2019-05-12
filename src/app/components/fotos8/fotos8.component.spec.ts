import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotos8Component } from './fotos8.component';

describe('Fotos8Component', () => {
  let component: Fotos8Component;
  let fixture: ComponentFixture<Fotos8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fotos8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fotos8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
