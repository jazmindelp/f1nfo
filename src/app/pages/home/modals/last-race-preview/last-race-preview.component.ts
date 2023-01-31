import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-last-race',
  templateUrl: './last-race-preview.component.html',
  styleUrls: ['./last-race-preview.component.css']
})
export class LastRaceComponent {

  lastRace: any;
  loading = true;
  constructor(private dataService: DataService){}

  ngOnInit(){
    //Get last race results

    this.dataService.getLastRace()
    .subscribe(( resp: any) =>{
      this.lastRace = resp.MRData.RaceTable.Races[0];
      this.loading = false;
  
    })
  }

}
