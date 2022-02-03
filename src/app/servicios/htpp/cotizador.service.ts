import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cotizador } from 'src/app/modelos/cotizacion';
import { Global } from '../global';

@Injectable()
export class CotizadorService {

  url: string = Global.url;
  constructor(private readonly _htppClient: HttpClient) { }


  getCotizacion(): Observable<any> {
    return this._htppClient.get<any>(this.url + '/Cotizador');
  }

  addCotizacion(cotizador: Cotizador) {
    console.log('URL', this.url + '/Cotizador', cotizador);
    return this._htppClient.post(this.url + '/Cotizador', cotizador);
  }

  deleteCotizacion(id: number) {
    return this._htppClient.delete(this.url + '/Cotizador/' + id);

  }
  updateCotizacion(id: number, cotizacion: Cotizador) {
    return this._htppClient.put(this.url + '/Cotizador/' + id, cotizacion);
  }
  getById(id: number): Observable<Cotizador> {
    return this._htppClient.get<Cotizador>(this.url + '/Cotizador/' + id);
  }

}


