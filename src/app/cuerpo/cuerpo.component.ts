import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AccesoApiService } from '../acceso-api.service';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { collection, collectionData, Firestore, getFirestore, provideFirestore, query, where,addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  @Input() monedas= new Array();
  
  @Input() monedasVigiladas=new Array();

  datosModo2=new Array();
  
  //Forma1
  /*datosDBD: Observable<any[]>;*/

  constructor( public datosApi:AccesoApiService, public firestore:Firestore){
    /*const datos = collection(firestore, 'items');
    this.datosDBD = collectionData(datos);*/

    /*Forma 2 */
    
    collectionData(collection(firestore, 'items')).subscribe((datos)=>this.datosModo2=datos);
  
    const colecionDatos = collection(firestore, 'items');

    
    //Sacar filtrado de datos
    collectionData(query(colecionDatos, where("nombre", "==", "Juan"))).subscribe((datos)=>this.datosModo2=datos);
  
  
  }

  escriboEnBD(){
    addDoc(collection(this.firestore, "items"), {
      nombre: "Juan",
      moneda: "Dodge"
    });
    
  }

/*
  lanzaPeticionAJAX(){
    this.http.get("https://api.coingecko.com/api/v3/coins").subscribe(
      (datos:any)=>{
        this.monedas=(datos);
      }
    );
  }

  ngOnInit(){
    this.lanzaPeticionAJAX();
  }*/
}

