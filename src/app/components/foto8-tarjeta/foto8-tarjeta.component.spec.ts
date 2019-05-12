import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto8TarjetaComponent } from './foto8-tarjeta.component';

describe('Foto8TarjetaComponent', () => {
  let component: Foto8TarjetaComponent;
  let fixture: ComponentFixture<Foto8TarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto8TarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto8TarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
