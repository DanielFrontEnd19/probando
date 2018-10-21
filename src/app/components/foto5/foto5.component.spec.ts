import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto5Component } from './foto5.component';

describe('Foto5Component', () => {
  let component: Foto5Component;
  let fixture: ComponentFixture<Foto5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
