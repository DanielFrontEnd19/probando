import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto10Component } from './foto10.component';

describe('Foto10Component', () => {
  let component: Foto10Component;
  let fixture: ComponentFixture<Foto10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
