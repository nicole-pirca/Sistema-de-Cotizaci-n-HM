import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaEditarCotizacionComponent } from './rutas/rutas-administracion/ruta-editar-cotizacion/ruta-editar-cotizacion.component';
import { RutaCrearCotizacionComponent } from './rutas/rutas-administracion/rutas-cotizacion/ruta-crear-cotizacion/ruta-crear-cotizacion.component';
import { RutaListaCotizacionComponent } from './rutas/rutas-administracion/rutas-cotizacion/ruta-lista-cotizacion/ruta-lista-cotizacion.component';

const routes: Routes = [
  {
    component: RutaCrearCotizacionComponent,
    path: 'crear-cotizacion'
  },
  {
    component: RutaListaCotizacionComponent,
    path: 'listar-cotizacion'
  },
  {
    component:RutaEditarCotizacionComponent,
    path: 'editar-cotizacion/:id'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
