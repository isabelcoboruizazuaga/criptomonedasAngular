import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  monedasVigiladas = new Array();
  moneda!: Object;
  monedas = new Array();


  constructor(private http: HttpClient) {
    if (localStorage.getItem('monedasVigiladas') != null && localStorage.getItem('monedasVigiladas') != undefined) {
      this.monedasVigiladas = JSON.parse(String(localStorage.getItem('monedasVigiladas')));
      console.log(this.monedasVigiladas)
    }

  }

  addToSelected(moneda: any) {
    if (!this.monedasVigiladas.find(x => x.id === moneda.id)) {
      this.monedasVigiladas.push(moneda);
      localStorage.setItem('monedasVigiladas', JSON.stringify(this.monedasVigiladas));
    }
  }

  deleteCoin(moneda: any) {
    let i = this.monedasVigiladas.findIndex(x => x.id === moneda.id);
    this.monedasVigiladas.splice(i, 1);
    localStorage.setItem('monedasVigiladas', JSON.stringify(this.monedasVigiladas));
  }
}