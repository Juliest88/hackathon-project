import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chartItems: any = {

  };

  constructor() { }

  ngOnInit() {
    this.chartItems = [
      {
        country: 'uk',
        target: 150000,
        sales: 148000,
        imgUrl: '1',
        bgColor: '#ffdd00'
      },
      {
        country: 'sweden',
        target: 150000,
        sales: 78234,
        imgUrl: '2',
        bgColor: '#ff66ff'
      },
      {
        country: 'denemark',
        target: 150000,
        sales: 123089,
        imgUrl: '8',
        bgColor: '#66ffcc'
      },
      {
        country: 'finland',
        target: 150000,
        sales: 30000,
        imgUrl: '4',
        bgColor: '#ff1a75'
      },
      {
        country: 'norway',
        target: 150000,
        sales: 97923,
        imgUrl: '5',
        bgColor: '#00e673'
      },
      {
        country: 'canada',
        target: 150000,
        sales: 130000,
        imgUrl: '6',
        bgColor: '#00ffff'
      },
      {
        country: 'us sport',
        target: 150000,
        sales: 30000,
        imgUrl: '2',
        bgColor: '#0066ff'
      },
      {
        country: 'row',
        target: 150000,
        sales: 98000,
        imgUrl: '8',
        bgColor: '#f78b09'
      },
      {
        country: 'sk+gr',
        target: 150000,
        sales: 40000,
        imgUrl: '5',
        bgColor: '#00e6e6'
      },
      {
        country: 'germany',
        target: 150000,
        sales: 57598,
        imgUrl: '9',
        bgColor: '#ff4dff'
      },
      {
        country: 'latin',
        target: 150000,
        sales: 8775,
        imgUrl: '4',
        bgColor: '#0099cc'
      }
    ]
  }

}
