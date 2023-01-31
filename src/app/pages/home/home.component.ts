import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  nextRace: any[] = [];
  loading = true;

  dDay: any;
  countDown: any;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  showWeekend = false;
  showLastRace = false;

  constructor( private dataService: DataService){}
  
  toggleWeekendModal () {
    this.showWeekend = !this.showWeekend;
    this.showLastRace = false;

  }

  toggleLastRaceModal () {
    this.showLastRace = !this.showLastRace;
    this.showWeekend = false;
  }


  ngOnInit(){

    // Get next race info

    this.dataService.getNextRace()
    
    .subscribe( (resp: any) =>{
      this.nextRace = resp.MRData.RaceTable.Races;
      this.loading = false;
  

    // Get target time for countdown
      this.dDay = this.nextRace[0].date
      this.dDay = this.dDay.concat(" ", this.nextRace[0].time).slice(0, -4)
      this.dDay = new Date(this.dDay).getTime();

    // Get countdown time - adjust to UTC timezone
      setInterval(() =>{
    
        this.countDown = this.dDay - new Date().getTime() - (new Date().getTimezoneOffset()*60000);
        this.days = (this.countDown/ (24*3600*1000));
        this.days = Math.floor(this.days);
      
        this.hours = ((this.countDown % (24*3600*1000)))/(1000*3600);
        this.hours = Math.floor(this.hours);
    
  
        this.minutes = (((this.countDown % (24*3600*1000)))%(1000*3600))/(1000*60);
        this.minutes = Math.floor(this.minutes);
      
        this.seconds = ((((this.countDown % (24*3600*1000)))%(1000*3600))%(1000*60))/1000;
        this.seconds = Math.floor(this.seconds);
      
      }, 1000)
      
   })

  }

  }


