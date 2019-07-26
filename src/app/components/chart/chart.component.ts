import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/models/Team';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chartItems: Team[];

  constructor() { }

  ngOnInit() {
    this.chartItems = [
      {
        id: 1,
        SEO_Team: 'uk',
        completion_rate: 5
      },
      {
        id: 2,
        SEO_Team: 'sweden',
        completion_rate: 18
      },
      {
        id: 3,
        SEO_Team: 'denemark',
        completion_rate: 12
      },
      {
        id: 4,
        SEO_Team: 'finland',
        completion_rate: 16
      },
      {
        id: 5,
        SEO_Team: 'norway',
        completion_rate: 37
      },
      {
        id: 6,
        SEO_Team: 'canada',
        completion_rate: 100
      },
      {
        id: 7,
        SEO_Team: 'us sport',
        completion_rate: 16
      },
      {
        id: 8,
        SEO_Team: 'row',
        completion_rate: 30
      },
      {
        id: 9,
        SEO_Team: 'sk+gr',
        completion_rate: 32
      },
      {
        id: 10,
        SEO_Team: 'germany',
        completion_rate: 31
      },
      {
        id: 11,
        SEO_Team: 'latin',
        completion_rate: 0
      }
    ]
  }

}
