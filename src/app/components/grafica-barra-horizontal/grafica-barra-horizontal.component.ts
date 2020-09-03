import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-barra-horizontal',
  templateUrl: './grafica-barra-horizontal.component.html',
  styleUrls: ['./grafica-barra-horizontal.component.scss']
})
export class GraficaBarraHorizontalComponent {

  @Input() results: any[] = [];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo;

  constructor() { }



  onSelect(event) {
    console.log(event);
  }


}
