import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-last-results',
  templateUrl: './last-results.component.html',
  styleUrls: ['./last-results.component.css']
})
export class LastResultsComponent {

  lastRace: any;
  loading = true;
  constructor (private dataService: DataService){}

  ngOnInit(){
    this.dataService.getLastRace()
    .subscribe((resp: any) =>{
      this.lastRace = resp.MRData.RaceTable.Races[0];
      this.loading = false;
  console.log(this.lastRace)
    })
  }
}
