import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto10TarjetaComponent } from './foto10-tarjeta.component';

describe('Foto10TarjetaComponent', () => {
  let component: Foto10TarjetaComponent;
  let fixture: ComponentFixture<Foto10TarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto10TarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto10TarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
