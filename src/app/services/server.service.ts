import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Team } from '../shared/models/Team';
import * as TEAM_CONF from './../shared/models/Team-conf';



@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private apiURL: string = 'http://10.15.2.144:8080/v1/report';
  private currentTarget: number; // today label

  constructor(private httpClient: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.httpClient.get<Team[]>('./../../assets/data.json')
      .pipe(map(val => this.mappingTeamColor(val)), retry(1), catchError(err => this.errorHandl(err)));
  }

  mappingTeamColor(data: Team[]): Team[] {
    data.forEach(team => {
      team.bgColor = TEAM_CONF.TEAM_COLOR[team['Country_Team']];
      team.alias_name = TEAM_CONF.TEAM_ALIAS_NAME[team['Country_Team']];
      team.baseImgUrl = this.removeSpaceFromStrings(TEAM_CONF.TEAM_ALIAS_NAME[team['Country_Team']]);
      team.emotion = team.Goal_Precnt_Month > this.currentTarget ? '_happy' : '_bored';
    });
    return data;
  }

  removeSpaceFromStrings(str: string): string {
    return str.replace(/\s/g, '');
  }

  getDaysInMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
  }

  /**
   * This function will calculate currentTarget(Today) now and each midnight
   */
  calculateCurrentTarget(): Observable<number> {
    return new Observable(observer => {
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let midnight = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 1, // the next day, ...
        0, 0, 0 // ...at 00:00:00 hours
      );
      let msToMidnight = midnight.getTime() - date.getTime();
      this.currentTarget = Math.floor((day / this.getDaysInMonth(month, year)) * 100);
      observer.next(this.currentTarget);
      setTimeout(() => {
        this.calculateCurrentTarget();
      }, msToMidnight);
    });
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
