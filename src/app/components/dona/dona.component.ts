import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';  

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
})
export class DonaComponent  {

  constructor() {
    // Valores por defecto en caso no se setee nada desde otros componentes
    this.dataDonut = [350, 450, 100];
  }

  @Input() title: string= 'Sin Titulo';

   // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [
    'Label1',
    'Label2',
    'Label3',
  ];
  @Input('data') dataDonut: number[] = [350, 450, 100];


  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.dataDonut,
        
      },
    ]
    };
}
