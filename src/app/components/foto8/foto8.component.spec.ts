import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto8Component } from './foto8.component';

describe('Foto8Component', () => {
  let component: Foto8Component;
  let fixture: ComponentFixture<Foto8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
