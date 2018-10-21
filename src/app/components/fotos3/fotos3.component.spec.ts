import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotos3Component } from './fotos3.component';

describe('Fotos3Component', () => {
  let component: Fotos3Component;
  let fixture: ComponentFixture<Fotos3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fotos3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fotos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
