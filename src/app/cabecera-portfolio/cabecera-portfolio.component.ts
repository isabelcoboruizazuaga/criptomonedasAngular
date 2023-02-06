import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccesoApiService } from '../acceso-api.service';

@Component({
  selector: 'app-cabecera-portfolio',
  templateUrl: './cabecera-portfolio.component.html',
  styleUrls: ['./cabecera-portfolio.component.css']
})
export class CabeceraPortfolioComponent {
  public page = 1;
  public pageSize = 8;
  public currentPage = 1;

  public isCollapsed = true;

  monedasVigiladas = new Array();

  @Output() monedaSeleccionada = new EventEmitter<Object>();

  constructor(public datosApi: AccesoApiService) {

  }

  nuevoVigilado(moneda: Object) {
    this.monedaSeleccionada.emit(moneda);
  }

}
