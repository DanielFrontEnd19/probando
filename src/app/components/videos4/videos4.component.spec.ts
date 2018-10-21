import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videos4Component } from './videos4.component';

describe('Videos4Component', () => {
  let component: Videos4Component;
  let fixture: ComponentFixture<Videos4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videos4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videos4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
