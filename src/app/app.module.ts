import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCotizacionComponent } from './componentes/forms/form-cotizacion/form-cotizacion.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { CotizadorService } from './servicios/htpp/cotizador.service';
import { RutaCrearCotizacionComponent } from './rutas/rutas-administracion/rutas-cotizacion/ruta-crear-cotizacion/ruta-crear-cotizacion.component';
import { RutaListaCotizacionComponent } from './rutas/rutas-administracion/rutas-cotizacion/ruta-lista-cotizacion/ruta-lista-cotizacion.component';
import { RutaEditarCotizacionComponent } from './rutas/rutas-administracion/ruta-editar-cotizacion/ruta-editar-cotizacion.component';


import {MatNativeDateModule} from '@angular/material/core';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    FormCotizacionComponent,
    RutaCrearCotizacionComponent,
    RutaListaCotizacionComponent,
    RutaEditarCotizacionComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatNativeDateModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [CotizadorService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
