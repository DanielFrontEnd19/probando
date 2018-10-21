import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotos4Component } from './fotos4.component';

describe('Fotos4Component', () => {
  let component: Fotos4Component;
  let fixture: ComponentFixture<Fotos4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fotos4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fotos4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
