import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotos6Component } from './fotos6.component';

describe('Fotos6Component', () => {
  let component: Fotos6Component;
  let fixture: ComponentFixture<Fotos6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fotos6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fotos6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
