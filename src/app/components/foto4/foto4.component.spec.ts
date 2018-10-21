import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto4Component } from './foto4.component';

describe('Foto4Component', () => {
  let component: Foto4Component;
  let fixture: ComponentFixture<Foto4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
