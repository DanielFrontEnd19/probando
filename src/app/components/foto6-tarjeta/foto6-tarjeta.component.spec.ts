import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto6TarjetaComponent } from './foto6-tarjeta.component';

describe('Foto6TarjetaComponent', () => {
  let component: Foto6TarjetaComponent;
  let fixture: ComponentFixture<Foto6TarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto6TarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto6TarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
