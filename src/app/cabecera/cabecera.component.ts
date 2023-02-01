import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccesoApiService } from '../acceso-api.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  public page = 1;
  public pageSize = 8;
  public currentPage =1;

	public isCollapsed = true;
  public monedasVigiladas= new Array();


  constructor( public datosApi:AccesoApiService){

  }

  nuevoVigilado(moneda:Object){
    this.monedasVigiladas.push(moneda);
    console.log(this.monedasVigiladas);
  }

}
