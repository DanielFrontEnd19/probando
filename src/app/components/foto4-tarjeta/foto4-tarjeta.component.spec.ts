import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto4TarjetaComponent } from './foto4-tarjeta.component';

describe('Foto4TarjetaComponent', () => {
  let component: Foto4TarjetaComponent;
  let fixture: ComponentFixture<Foto4TarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto4TarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto4TarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
