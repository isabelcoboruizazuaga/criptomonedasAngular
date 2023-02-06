import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccesoApiService } from '../acceso-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})
export class MonedasComponent {

  @Input() monedasVigiladas = new Array();

  constructor(private router: Router) {

  }

  @Output() monedaBorrada: EventEmitter<any> = new EventEmitter();

  monedaClicada(moneda: any) {
    this.router.navigate(['/detalle', moneda.id]);
  }
  borrarMonedaClicada(moneda: Object) {      
    this.monedaBorrada.emit(moneda);  
  }
}
