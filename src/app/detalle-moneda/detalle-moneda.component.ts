import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AccesoApiService } from '../acceso-api.service';

@Component({
  selector: 'app-detalle-moneda',
  templateUrl: './detalle-moneda.component.html',
  styleUrls: ['./detalle-moneda.component.css']
})
export class DetalleMonedaComponent {

   @Input() monedas=new Array();

  constructor(private http:HttpClient) {
  }
  
   /* 
  obtenerInfoMoneda(id:string){
    this.http.get("https://api.coingecko.com/api/v3/coins/bitcoin").subscribe(
      (datos:any)=>{
        this.moneda= datos;
      }
    );
   }

  
  ngOnInit(){
    this.obtenerInfoMoneda("bitcoin");
  }
  {
    id: "",
    image: {
      small: ""
    },
    symbol: "",
    description: "",

    repos_url: {
      github: [""],
    },
    links: {
      subreddit_url: "",
      blockchain_site: [""]
    },
    genesis_date: "",
    market_data: {
      current_price: ""
    }
  } */
}
