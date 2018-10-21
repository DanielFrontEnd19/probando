import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto2TarjetaComponent } from './foto2-tarjeta.component';

describe('Foto2TarjetaComponent', () => {
  let component: Foto2TarjetaComponent;
  let fixture: ComponentFixture<Foto2TarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto2TarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto2TarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
