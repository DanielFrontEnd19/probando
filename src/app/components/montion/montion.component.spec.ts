import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontionComponent } from './montion.component';

describe('MontionComponent', () => {
  let component: MontionComponent;
  let fixture: ComponentFixture<MontionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
