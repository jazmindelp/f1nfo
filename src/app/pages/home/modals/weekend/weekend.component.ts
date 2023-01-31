import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-weekend',
  templateUrl: './weekend.component.html',
  styleUrls: ['./weekend.component.css']
})
export class WeekendComponent {

  nextRace: any [] =[];
  loading = true;
  
  constructor(private dataService: DataService){}

  ngOnInit(){

      // Get next race info

      this.dataService.getNextRace()
    
      .subscribe( (resp: any) =>{
        this.nextRace = resp.MRData.RaceTable.Races;
        this.loading = false;
  })
  
}


}
