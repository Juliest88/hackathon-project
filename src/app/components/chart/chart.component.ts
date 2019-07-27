import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { Team } from 'src/app/shared/models/Team';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() baseUnit: number;
  chartItems: Team[];
  percentageLables: number[] = [];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.getAllTeams();
    this.calculateYAxisPercentageLables();
  }

  getAllTeams() {
    this.serverService.getAllTeams().subscribe(teams => {
      this.chartItems = teams;
    });
  }

  calculateYAxisPercentageLables() {
    let maxPrecentage = 100;
    do {
      this.percentageLables.push(maxPrecentage);
      maxPrecentage = maxPrecentage - this.baseUnit;
    } while (maxPrecentage > 0)
  }

}
