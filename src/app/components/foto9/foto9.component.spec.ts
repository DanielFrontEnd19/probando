import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto9Component } from './foto9.component';

describe('Foto9Component', () => {
  let component: Foto9Component;
  let fixture: ComponentFixture<Foto9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
