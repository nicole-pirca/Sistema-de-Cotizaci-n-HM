import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cotizador } from 'src/app/modelos/cotizacion';
import { CotizadorService } from 'src/app/servicios/htpp/cotizador.service';

@Component({
  selector: 'app-ruta-crear-cotizacion',
  templateUrl: './ruta-crear-cotizacion.component.html',
  styleUrls: ['./ruta-crear-cotizacion.component.css']
})
export class RutaCrearCotizacionComponent implements OnInit {

  constructor(private readonly _cotizadorService: CotizadorService,
    private readonly _router: Router,) { }

  ngOnInit(): void {
  }

  crearCotizacion(cotizacion: Cotizador) {
    console.log("cotizacion",cotizacion);
    this._cotizadorService.addCotizacion(cotizacion).
    subscribe(()=>{
      console.log('REGISTRADO');
    },error => {console.error('ERROR',error)});
    
  }

}
