import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cotizador } from 'src/app/modelos/cotizacion';
import { CotizadorService } from 'src/app/servicios/htpp/cotizador.service';

@Component({
  selector: 'app-ruta-editar-cotizacion',
  templateUrl: './ruta-editar-cotizacion.component.html',
  styleUrls: ['./ruta-editar-cotizacion.component.css']
})
export class RutaEditarCotizacionComponent implements OnInit {

  viewForm: boolean = false;

  id!:number;
  cotizador!:Cotizador;

  constructor(private readonly _cotiService: CotizadorService, 
    private readonly _activatedRoute: ActivatedRoute, private readonly _router: Router,) { }

  ngOnInit(): void {
    
    const observableCotizador = this._activatedRoute.params;
    observableCotizador.subscribe((parametros:Params)=>{
      this.id = Number(parametros['id']);
      const obserableObtenerCotizacion = this._cotiService.getById(this.id);
      obserableObtenerCotizacion.subscribe((cotizacion)=>{
        this.cotizador = cotizacion;
        this.llenarviewForm();

      }, error => {console.error('Error obteniendo Cotizacion', error);})
    })
  }
  llenarviewForm() {
    this.viewForm = true;
  }
  actualizarCoizacion(cotizador:Cotizador){
    this._cotiService.updateCotizacion(this.id, cotizador).subscribe(()=>{
      console.log('Producto actualizado',cotizador);
      const ruta = ['listar-cotizacion'];
      this._router.navigate(ruta);
    }, error => {console.error('Error en actualizar', error)});
  }

}
