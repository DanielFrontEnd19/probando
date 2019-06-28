import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videos5Component } from './videos5.component';

describe('Videos5Component', () => {
  let component: Videos5Component;
  let fixture: ComponentFixture<Videos5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videos5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videos5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
