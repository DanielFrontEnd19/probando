import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videos6Component } from './videos6.component';

describe('Videos6Component', () => {
  let component: Videos6Component;
  let fixture: ComponentFixture<Videos6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videos6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videos6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
