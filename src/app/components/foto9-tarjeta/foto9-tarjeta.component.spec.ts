import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto9TarjetaComponent } from './foto9-tarjeta.component';

describe('Foto9TarjetaComponent', () => {
  let component: Foto9TarjetaComponent;
  let fixture: ComponentFixture<Foto9TarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto9TarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto9TarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
