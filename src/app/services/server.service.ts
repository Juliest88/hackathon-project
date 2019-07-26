import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../shared/models/Team';
import { TEAM_COLOR } from '../shared/models/Team-color';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http: HttpClient) { }

  // mockup data
  getAllTeams(): Observable<Team[]> {
    return new Observable(observer => {
      let data = [
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
      ];
      setTimeout(() => {
        data = this.mappingTeamColor(data);
        observer.next(data);
      }, 1000);
    });
  }

  mappingTeamColor(data) {
    data.forEach(team => {
      team.bgColor = TEAM_COLOR[team['SEO_Team']];
    });
    return data;
  }
}
