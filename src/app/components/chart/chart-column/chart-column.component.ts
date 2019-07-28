import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Team } from 'src/app/shared/models/Team';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'chart-column',
  templateUrl: './chart-column.component.html',
  styleUrls: ['./chart-column.component.scss']
})
export class ChartColumnComponent implements OnInit {
  @Input() chartItem: Team;
  @ViewChild('performanceBar', { static: true }) performanceBar: ElementRef;
  pervasivenessScoreGaugeOptions:any;
  constructor() { }

  ngOnInit(): void {
    this.initBotScore(50)
    this.setColumnHeightPercentage(0);
    setTimeout(() => {
      this.setColumnHeightPercentage(this.chartItem.completion_rate);
    }, 200)
  }

  setColumnHeightPercentage(height: number) {
    this.performanceBar.nativeElement.style.height = height + '%';
  }

  private getGaugeBaseOptions(value: number):any {
    return {
      chart: {
        height: 200,
        type: 'solidgauge',
        margin: [0, 0, 0, 0],
        backgroundColor: 'transparent'
      },
      title: null,
      yAxis: {
        stops: [
          [0.4, '#55BF3B'], // green
          [0.7, '#DDDF0D'], // yellow
          [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        labels: {
          enabled: false
        }
      },
      pane: {
        size: '85%',
        center: ['50%', '85%'],
        startAngle: -100,
        endAngle: 100,
        background: {
          borderWidth: 13,
          backgroundColor: '#DBDBDB',
          shape: 'arc',
          borderColor: '#2219a5',
          outerRadius: '80%',
          innerRadius: '100%'
        }
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        solidgauge: {
          borderColor: this.chartItem.bgColor,
          borderWidth: 13,
          radius: 90,
          innerRadius: '100%',
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        }
      }
    };
  }

  initBotScore(score) {
    let options:any = Highcharts.merge(
      this.getGaugeBaseOptions(score),
      {
        yAxis: {
          min: 0,
          max: 100,
          title: {
            text: ''
          }
        },

        credits: {
          enabled: false
        },

        series: [
          {
            data: [score],
            dataLabels: {
              format: `<div class='score-value'><span>{y}</span></div>`
            },
            tooltip: {
              valueSuffix: 'year revenue'
            }
          }
        ]
      }
    );
    this.pervasivenessScoreGaugeOptions = new Chart(options);
  }

}
