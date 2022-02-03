import { Component, OnInit } from '@angular/core';
import { Cotizador } from 'src/app/modelos/cotizacion';
import { CotizadorService } from 'src/app/servicios/htpp/cotizador.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-ruta-lista-cotizacion',
  templateUrl: './ruta-lista-cotizacion.component.html',
  styleUrls: ['./ruta-lista-cotizacion.component.css']
})
export class RutaListaCotizacionComponent implements OnInit {

  arregloCotizacion: Cotizador[] = [];

  dataSource = new MatTableDataSource<Cotizador>();

  displayedColumns: string[] = ['tipoEvento', 'lugaEvento', 'fechaEvento', 'numPersonas', 'nombre', 'telefono', 'correo', 'cuidad', 'mensaje', 'acciones']

  constructor(private readonly _cotizaService: CotizadorService) { }

  ngOnInit(): void {
    this._cotizaService.getCotizacion().subscribe((cotizacion) => {
      this.arregloCotizacion = cotizacion;
      this.dataSource.data = this.arregloCotizacion;
    }, error => {
      console.error('Error de carga de Cotizaciones', error);
    });
  }

  deleteCoti(id: number) {
    this._cotizaService.deleteCotizacion(id).subscribe(() => {
      const indice = this.arregloCotizacion.findIndex(cotizacion => cotizacion.id == id);
      this.arregloCotizacion.splice(indice, 1);
      this.dataSource.data = this.arregloCotizacion;
      console.log("Cotizacion elimnada");
    }, error => {

      console.error('Error en la eliminacion de la Cotización', error);
    });

  }
}
