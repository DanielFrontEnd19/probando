import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotos9Component } from './fotos9.component';

describe('Fotos9Component', () => {
  let component: Fotos9Component;
  let fixture: ComponentFixture<Fotos9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fotos9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fotos9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
