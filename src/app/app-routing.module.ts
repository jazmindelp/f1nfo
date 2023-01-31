import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ConstructorsComponent } from './pages/constructors/constructors.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { HomeComponent } from './pages/home/home.component';
import { LastResultsComponent } from './pages/last-results/last-results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'constructors', component: ConstructorsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'last-race-results', component: LastResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }



 