import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PieComponent } from './pie/pie.component';
import { MonedasComponent } from './monedas/monedas.component';
import { DetalleMonedaComponent } from './detalle-moneda/detalle-moneda.component';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CabeceraPortfolioComponent } from './cabecera-portfolio/cabecera-portfolio.component';
import * as CanvasJSAngularChart from '../assets/canvasjs/canvasjs.angular.component';
import { InicioComponent } from './inicio/inicio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;


const routes: Routes=[
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'detalle/:id', component: DetalleMonedaComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    CanvasJSChart,
    CabeceraComponent,
    CuerpoComponent,
    PieComponent,
    MonedasComponent,
    DetalleMonedaComponent,
    CabeceraPortfolioComponent,
    InicioComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    RouterModule.forRoot(routes),    
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
