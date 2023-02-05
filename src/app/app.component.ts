import { HttpClient } from '@angular/common/http';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_angular';

  monedasVigiladas = new Array();
  mostrarDet=false;
  moneda!: Object;
  monedas=new Array();


  constructor(private http:HttpClient) {
    if (localStorage.getItem('monedasVigiladas')!=null && localStorage.getItem('monedasVigiladas')!=undefined) {
      this.monedasVigiladas=JSON.parse(String(localStorage.getItem('monedasVigiladas')));
      console.log(this.monedasVigiladas)
    }

  }

  addToSelected(moneda: Object) {
    if (!this.monedasVigiladas.includes(moneda)) {
      this.monedasVigiladas.push(moneda);
      localStorage.setItem('monedasVigiladas', JSON.stringify(this.monedasVigiladas));
    }
  }

  mostrarDetalle(moneda:any){
    this.http.get("https://api.coingecko.com/api/v3/coins/"+moneda.id).subscribe(
      (datos:any)=>{
        this.moneda= datos;
        this.monedas[0]=this.moneda;
          
          this.mostrarDet=true;
      }
    );
  } 
}
