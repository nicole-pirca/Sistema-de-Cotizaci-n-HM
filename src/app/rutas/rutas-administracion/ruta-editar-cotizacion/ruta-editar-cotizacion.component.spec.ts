import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarCotizacionComponent } from './ruta-editar-cotizacion.component';

describe('RutaEditarCotizacionComponent', () => {
  let component: RutaEditarCotizacionComponent;
  let fixture: ComponentFixture<RutaEditarCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEditarCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
