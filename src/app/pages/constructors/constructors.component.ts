import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.css']
})
export class ConstructorsComponent {

  constructor( private dataService: DataService){}

  constructorStandings: any;
  loading = true;


  ngOnInit(){
//Get constructors' standings
    this.dataService.getConstructorStandings()
    .subscribe((resp: any) =>{
      this.constructorStandings = resp.MRData.StandingsTable.StandingsLists[0];
      this.loading = false;
      console.log(this.constructorStandings)
    })
  }
}
