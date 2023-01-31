import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { 


    this.getNextRace();
    this.getDriverStandigs();
    this.getConstructorStandings();
    this.getCalendar();
    this.getLastRace();
  }

  // get year for calendar api

date: Date = new Date();
year: number = this.date.getFullYear();

getNextRace(){
 return this.http.get('https://ergast.com/api/f1/current/next.json')
}

getLastRace(){
  return this.http.get('https://ergast.com/api/f1/current/last/results.json')
}
getDriverStandigs(){
  return this.http.get('http://ergast.com/api/f1/current/driverStandings.json')
}
  
getConstructorStandings(){
  return this.http.get('http://ergast.com/api/f1/current/constructorStandings.json')
}

getCalendar(){
  return this.http.get(`https://ergast.com/api/f1/${this.year}.json`)
}


}
