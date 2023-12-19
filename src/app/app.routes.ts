import { Routes } from '@angular/router';
import { AllTimeComponent } from 'modules/all-time/all-time.component';
import { HomeComponent } from 'modules/home/home.component';
import { TimeTableComponent } from 'modules/time-table/time-table.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'time-table', component: TimeTableComponent },
  { path: 'all-time', component: AllTimeComponent },
];
