import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaCotizacionComponent } from './ruta-lista-cotizacion.component';

describe('RutaListaCotizacionComponent', () => {
  let component: RutaListaCotizacionComponent;
  let fixture: ComponentFixture<RutaListaCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListaCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
