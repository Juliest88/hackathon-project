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
        sales: 30000
      },
      {
        country: 'sweden',
        target: 150000,
        sales: 30000
      },
      {
        country: 'denemark',
        target: 150000,
        sales: 30000
      },
      {
        country: 'finland',
        target: 150000,
        sales: 30000
      },
      {
        country: 'norway',
        target: 150000,
        sales: 30000
      },
      {
        country: 'canada',
        target: 150000,
        sales: 30000
      },
      {
        country: 'us sport',
        target: 150000,
        sales: 30000
      },
      {
        country: 'row',
        target: 150000,
        sales: 30000
      },
      {
        country: 'sk+gr',
        target: 150000,
        sales: 30000
      },
      {
        country: 'germany',
        target: 150000,
        sales: 30000
      },
      {
        country: 'latin',
        target: 150000,
        sales: 30000
      }
    ]
  }

}
