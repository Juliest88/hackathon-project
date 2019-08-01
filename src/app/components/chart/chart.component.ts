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
  modifyDate: string;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.getAllTeams();
    this.calculateYAxisPercentageLables();
    this.calculateCurrentTarget(); // for Today lable
  }

  getAllTeams() {
    this.getTeams();
  }

  getTeams(): void {
    this.serverService.getTeams().subscribe(teams => {
      this.chartItems = teams;
      this.modifyDate = this.chartItems[0].Update_Timestamp;
    });
  }

  calculateYAxisPercentageLables() {
    let maxPrecentage = 100;
    do {
      this.percentageLables.push(maxPrecentage);
      maxPrecentage = maxPrecentage - this.baseUnit;
    } while (maxPrecentage >= 0)
  }


  calculateCurrentTarget(): void {
    this.serverService.calculateCurrentTarget().subscribe(currentTarget => {
      this.currentTarget = currentTarget;
    });
  }
}
