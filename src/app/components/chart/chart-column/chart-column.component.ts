import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Team } from 'src/app/shared/models/Team';

@Component({
  selector: 'chart-column',
  templateUrl: './chart-column.component.html',
  styleUrls: ['./chart-column.component.scss']
})
export class ChartColumnComponent implements OnInit {
  @Input() chartItem: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
