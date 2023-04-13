import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() label!: string;
  @Input() total!: string;
  @Input() perceentage!: string;
  chartOptions!: {};
  Highcharts = Highcharts;
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: null,
        align: 'left',
      },
      subtitle: {
        text: 'Demo',
        align: 'left',
      },
      exporting: {
        enabled: true,
      },

      series: [
        {
          name: 'Total production',
          data: [
            37.8, 29.3, 30.8, 36.8, 40.5, 35.3, 34.9, 43.6, 45.7, 35.9, 32.7,
          ],
        },
        {
          name: 'Gross consumption',
          data: [
            39.9, 29.9, 26.7, 38.1, 39.3, 30.2, 27.5, 36.7, 42.7, 31.4, 27.5,
          ],
        },
        {
          name: 'Trade surplus',
          data: [-2.2, -0.6, 4.1, -1.3, 1.2, 5.1, 7.4, 6.9, 2.9, 4.5, 5.2],
        },
      ],
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
  constructor() {}
}
