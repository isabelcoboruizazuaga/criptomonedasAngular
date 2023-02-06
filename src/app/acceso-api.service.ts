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
    return this.http.get("https://api.coingecko.com/api/v3/coins/"+id)
   }

   obtenerDatosChart(id:string){
    return this.http.get("https://api.coingecko.com/api/v3/coins/"+id+"/market_chart?vs_currency=eur&days=30")
   }

   

}
