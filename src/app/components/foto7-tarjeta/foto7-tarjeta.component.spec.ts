import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto7TarjetaComponent } from './foto7-tarjeta.component';

describe('Foto7TarjetaComponent', () => {
  let component: Foto7TarjetaComponent;
  let fixture: ComponentFixture<Foto7TarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto7TarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto7TarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
