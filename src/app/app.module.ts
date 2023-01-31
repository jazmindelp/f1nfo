import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { ConstructorsComponent } from './pages/constructors/constructors.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LastRaceComponent } from './pages/home/modals/last-race-preview/last-race-preview.component';
import { WeekendComponent } from './pages/home/modals/weekend/weekend.component';
import { LastResultsComponent } from './pages/last-results/last-results.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DriversComponent,
    ConstructorsComponent,
    CalendarComponent,
    LastRaceComponent,
    WeekendComponent,
    LastResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
