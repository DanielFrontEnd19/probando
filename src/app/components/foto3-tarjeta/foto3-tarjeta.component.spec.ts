import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto3TarjetaComponent } from './foto3-tarjeta.component';

describe('Foto3TarjetaComponent', () => {
  let component: Foto3TarjetaComponent;
  let fixture: ComponentFixture<Foto3TarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto3TarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto3TarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
