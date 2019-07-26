import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Team } from 'src/app/shared/models/Team';

@Component({
  selector: 'chart-column',
  templateUrl: './chart-column.component.html',
  styleUrls: ['./chart-column.component.scss']
})
export class ChartColumnComponent implements OnInit {
  @Input() chartItem: Team;
  @ViewChild('performanceBar') performanceBar: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.setColumnHeightPercentage(0);
    setTimeout(() => {
      this.setColumnHeightPercentage(this.chartItem.completion_rate);
    }, 200)
  }

  setColumnHeightPercentage(height: number) {
    this.performanceBar.nativeElement.style.height = height + '%';
  }

}
