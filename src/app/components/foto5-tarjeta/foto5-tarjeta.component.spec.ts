import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto5TarjetaComponent } from './foto5-tarjeta.component';

describe('Foto5TarjetaComponent', () => {
  let component: Foto5TarjetaComponent;
  let fixture: ComponentFixture<Foto5TarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto5TarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto5TarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
