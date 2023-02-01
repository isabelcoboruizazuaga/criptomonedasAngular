import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})
export class MonedasComponent {

  @Input() monedasVigiladas=new Array();


}
