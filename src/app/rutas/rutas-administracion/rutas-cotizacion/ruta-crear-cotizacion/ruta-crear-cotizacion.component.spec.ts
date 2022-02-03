import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearCotizacionComponent } from './ruta-crear-cotizacion.component';

describe('RutaCrearCotizacionComponent', () => {
  let component: RutaCrearCotizacionComponent;
  let fixture: ComponentFixture<RutaCrearCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCrearCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
