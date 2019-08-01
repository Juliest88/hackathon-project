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
  @Input() currentTarget: number;
  @ViewChild('performanceBar', { static: true }) performanceBar: ElementRef;
  pervasivenessScoreGaugeOptions: any;
  imgURL: string;

  constructor() { }

  ngOnInit(): void {
    this.initBotScore(this.chartItem.Goal_Precnt_Year);
    this.setColumnHeightAnimation();
    this.glowingColumn();
  }

  setColumnHeightAnimation(): void {
    this.setColumnHeightPercentage(0);
    setTimeout(() => {
      this.setColumnHeightPercentage(this.chartItem.Goal_Precnt_Month);
    }, 200);
  }

  setColumnHeightPercentage(height: number) {
    this.performanceBar.nativeElement.style.height = height + '%';
  }

  glowingColumn(): void {
    if (this.chartItem.emotion === '_happy') {
      this.performanceBar.nativeElement.style.boxShadow = `0 0 100px 25px ${this.chartItem.bgColor}`;
    }
  }

  private getGaugeBaseOptions(value: number): any {
    return {
      chart: {
        height: 130,
        type: 'solidgauge',
        margin: [0, 0, 0, 0],
        backgroundColor: 'transparent',
      },
      title: null,
      yAxis: {
        stops: [
          [0.4, this.chartItem.bgColor], 
          [0.7, this.chartItem.bgColor],
          [0.9, this.chartItem.bgColor] 
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        labels: {
          enabled: false
        }
      },
      pane: {
        size: '90%',
        center: ['50%', '85%'],
        startAngle: -100,
        endAngle: 100,
        background: {
          borderWidth: 3,
          backgroundColor: '#190c69',
          shape: 'arc',
          borderColor: '#190c69',
          outerRadius: '90%',
          innerRadius: '100%'
        }
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        solidgauge: {
          borderColor: this.chartItem.bgColor,
          borderWidth: 3,
          radius: 100,
          innerRadius: '90%',
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        },
      }
    };
  }

  initBotScore(score) {
    let options: any = Highcharts.merge(
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
              format: `<div class='yearly-percentage' style="color: #fff; font-size: 24px; font-weight:400; position: relative; top: 10px; left: 5px; font-family: 'Barlow', sans-serif;">
              <span>{y}%</span>
              </div>`
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
