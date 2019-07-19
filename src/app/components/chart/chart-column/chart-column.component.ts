import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chart-column',
  templateUrl: './chart-column.component.html',
  styleUrls: ['./chart-column.component.scss']
})
export class ChartColumnComponent implements OnInit {
  @Input() chartItem: any;

  constructor() { }

  ngOnInit() {
  }

  calculatePerformance() {
    return (
      (this.chartItem.sales / this.chartItem.target) * 100 + '%'
    )
  }

}
