import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccesoApiService } from '../acceso-api.service';

@Component({
  selector: 'app-detalle-moneda',
  templateUrl: './detalle-moneda.component.html',
  styleUrls: ['./detalle-moneda.component.css']
})
export class DetalleMonedaComponent implements AfterViewInit {

  monedas = new Array;
  dataPoints: any = [];
  chart: any;
  id: any;


  constructor(public accesoApi: AccesoApiService, private router: ActivatedRoute) {

  }
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    })

    this.accesoApi.obtenerInfoMoneda(this.id).subscribe(
      (datos: any) => {
        this.monedas[0] = datos;
      }
    );
  }

  chartOptions = {
    theme: "light2",
    zoomEnabled: true,
    exportEnabled: true,
    title: {
      text: "Precio en 30 días"
    },
    subtitles: [{
      text: "Loading Data...",
      fontSize: 24,
      horizontalAlign: "center",
      verticalAlign: "center",
      dockInsidePlotArea: true
    }],
    axisY: {
      title: "Precio (in eur)",
      prefix: "$"
    },
    data: [{
      type: "line",
      name: "Precio",
      yValueFormatString: "$#,###.00",
      xValueType: "dateTime",
      dataPoints: this.dataPoints
    }]
  }

  /*Creación de la gráfica */
  getChartInstance(chart: object) {
    this.chart = chart;
  }

  /*Inicialización de la gráfica */
  ngAfterViewInit() {
    this.accesoApi.obtenerDatosChart(this.id).subscribe(
      (datos: any) => {
        let data = datos;
        for (let i = 0; i < data.prices.length; i++) {
          this.dataPoints.push({ x: new Date(data.prices[i][0]), y: Number(data.prices[i][1]) });
        }
        this.chart.subtitles[0].remove();
      }
    );
  }
}
