import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})
export class MonedasComponent {

  @Input() monedasVigiladas=new Array();

  @Output() monedaClick=new EventEmitter<Object>();

  monedaClicada(moneda: Object){    
    this.monedaClick.emit(moneda);
  }
}
