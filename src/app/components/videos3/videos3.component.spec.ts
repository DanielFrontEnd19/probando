import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videos3Component } from './videos3.component';

describe('Videos3Component', () => {
  let component: Videos3Component;
  let fixture: ComponentFixture<Videos3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videos3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
