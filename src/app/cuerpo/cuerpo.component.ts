import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AccesoApiService } from '../acceso-api.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  @Input() monedas= new Array();
  constructor( public datosApi:AccesoApiService){

  }
/*
  lanzaPeticionAJAX(){
    this.http.get("https://api.coingecko.com/api/v3/coins").subscribe(
      (datos:any)=>{
        this.monedas=(datos);
      }
    );
  }

  ngOnInit(){
    this.lanzaPeticionAJAX();
  }*/
}
