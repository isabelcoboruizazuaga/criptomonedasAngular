import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

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

  addToSelected(moneda: any) {
    //let miMoneda=this.monedasVigiladas.find(x => x.id === moneda.id);
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