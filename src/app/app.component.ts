import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_angular';

  monedasVigiladas= new Array();

  addToSelected(moneda:Object){
    this.monedasVigiladas.push(moneda);
    console.log(moneda);
  }
}
