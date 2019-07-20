import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'chart-column',
  templateUrl: './chart-column.component.html',
  styleUrls: ['./chart-column.component.scss']
})
export class ChartColumnComponent implements OnInit, OnChanges {
  @Input() chartItem: any;
  performance = null;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.calculatePerformance();
  }

  calculatePerformance(): void {
    this.performance = Math.floor((this.chartItem.sales / this.chartItem.target) * 100) + '%';
  }

}
