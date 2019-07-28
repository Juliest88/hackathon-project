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
  percentageLables: number[] = [];
  chartItems: Team[];
  currentTarget: number;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.getAllTeams();
    this.calculateYAxisPercentageLables();
  }

  getAllTeams() {
    this.getTeams();
    this.calculateCurrentTarget();
  }

  getTeams(): void {
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

  getDaysInMonth(month: number, year: number): number {
    // January is 1 based
    // Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
  }

  calculateCurrentTarget(): void {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    this.currentTarget = (day / this.getDaysInMonth(month, year)) * 100;
  }


}
