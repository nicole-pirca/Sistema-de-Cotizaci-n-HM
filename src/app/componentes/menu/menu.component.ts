import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private readonly _router: Router) { }

  ngOnInit(): void {
  }
  CotizadorCreacio(){
    const ruta = ['/crear-cotizacion'];
    this._router.navigate(ruta);
  }
  ListarCreacio(){
    const ruta = ['/listar-cotizacion'];
    this._router.navigate(ruta);
  }
}
