import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  constructor( private dataService: DataService ){ }
  
  calendar: any;
  loading = true;

  ngOnInit(){
    //Get calendar

    this.dataService.getCalendar()
    .subscribe((resp:any) =>{
      this.calendar = resp.MRData.RaceTable;
      this.loading = false;
    })
  }
}
