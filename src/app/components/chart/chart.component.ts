import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/models/Team';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chartItems: Team[];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.getAllTeams();
  }

  getAllTeams() {
    this.serverService.getAllTeams().subscribe(teams => {
      this.chartItems = teams;
    });
  }

}
