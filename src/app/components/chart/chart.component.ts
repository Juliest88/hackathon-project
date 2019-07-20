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
        sales: 148000
      },
      {
        country: 'sweden',
        target: 150000,
        sales: 32949
      },
      {
        country: 'denemark',
        target: 150000,
        sales: 45477
      },
      {
        country: 'finland',
        target: 150000,
        sales: 30000
      },
      {
        country: 'norway',
        target: 150000,
        sales: 97923
      },
      {
        country: 'canada',
        target: 150000,
        sales: 130000
      },
      {
        country: 'us sport',
        target: 150000,
        sales: 30000
      },
      {
        country: 'row',
        target: 150000,
        sales: 98000
      },
      {
        country: 'sk+gr',
        target: 150000,
        sales: 40000
      },
      {
        country: 'germany',
        target: 150000,
        sales: 57598
      },
      {
        country: 'latin',
        target: 150000,
        sales: 8775
      }
    ]
  }

}
