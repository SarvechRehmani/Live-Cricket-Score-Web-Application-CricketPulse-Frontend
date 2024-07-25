import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveComponent } from './pages/live/live.component';
import { HistoryComponent } from './pages/history/history.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home | Cricket Pulse',
  },
  {
    path: 'live',
    component: LiveComponent,
    title: 'Live Matches | Cricket Pulse',
  },
  {
    path: 'history',
    component: HistoryComponent,
    title: 'Match History | Cricket Pulse',
  },
  {
    path: 'point-table',
    component: PointTableComponent,
    title: 'Point Table | Cricket Pulse',
  },
  {
    path: 'upcoming',
    component: UpcomingComponent,
    title: 'Upcoming Matches | Cricket Pulse',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
