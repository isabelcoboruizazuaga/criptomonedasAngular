import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesoApiService {

  @Input() listaMonedas= new Array();
  @Input() moneda= Object;

  constructor(private http:HttpClient) {
    this.obtenerlistamonedas();    
    this.obtenerInfoMoneda('bitcoin');
   }

   obtenerlistamonedas(){
    this.http.get("https://api.coingecko.com/api/v3/coins/").subscribe(
      (datos:any)=>{
        this.listaMonedas=(datos);
        console.log(datos)
      }
    );
   }

   obtenerInfoMoneda(id:string){
    this.http.get("https://api.coingecko.com/api/v3/coins/bitcoin").subscribe(
      (datos:any)=>{
        this.moneda=datos;
      }
    );
   }

   

}
