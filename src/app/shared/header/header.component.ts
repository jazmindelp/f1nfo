import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  driverStandings: any;
  constructor( private dataService: DataService,
               private router: Router){}


  // ngOnInit(){
  //   this.dataService.getDriverStandigs()
  //   .subscribe((resp: any) =>{

  //     this.driverStandings = resp;

  //     console.log(this.driverStandings)

  //   })
  // }

}



