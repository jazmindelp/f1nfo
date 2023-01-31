import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent {
  constructor( private dataService: DataService){}

  driverStandings: any;
  loading = true;


  ngOnInit(){

 // Get next driver standings
    this.dataService.getDriverStandigs()
    .subscribe((resp: any) =>{
      this.driverStandings = resp.MRData.StandingsTable.StandingsLists[0];
      this.loading = false;
      console.log(this.driverStandings)
    })
  
  }
}