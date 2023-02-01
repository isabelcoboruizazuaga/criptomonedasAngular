import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesoApiService {
  @Input() listaMonedas= new Array();

  constructor(private http:HttpClient) {
    this.obtenerlistamonedas()
    
   }

   obtenerlistamonedas(){
    this.http.get("https://api.coingecko.com/api/v3/coins").subscribe(
      (datos:any)=>{
        this.listaMonedas=(datos);
      }
    );
   }

   obtenerInfoMoneda(){
    this.http.get("https://api.coingecko.com/api/v3/coins").subscribe(
      (datos:any)=>{
        //this.monedas=(datos);
      }
    );
   }
}
