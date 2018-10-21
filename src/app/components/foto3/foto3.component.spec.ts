import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto3Component } from './foto3.component';

describe('Foto3Component', () => {
  let component: Foto3Component;
  let fixture: ComponentFixture<Foto3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
