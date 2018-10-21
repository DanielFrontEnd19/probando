import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotos5Component } from './fotos5.component';

describe('Fotos5Component', () => {
  let component: Fotos5Component;
  let fixture: ComponentFixture<Fotos5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fotos5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fotos5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
