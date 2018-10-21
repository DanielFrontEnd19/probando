import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto6Component } from './foto6.component';

describe('Foto6Component', () => {
  let component: Foto6Component;
  let fixture: ComponentFixture<Foto6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
