import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotos10Component } from './fotos10.component';

describe('Fotos10Component', () => {
  let component: Fotos10Component;
  let fixture: ComponentFixture<Fotos10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fotos10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fotos10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
