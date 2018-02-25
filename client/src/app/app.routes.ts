import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { TicketsComponent } from './tickets/tickets.component';
import {AdminComponent} from './routes/admin.component';
import {NewStationComponent} from './stations/components/new-station/newStation.component';
import {RoutesComponent} from './routes/routes.component';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tickets', component: TicketsComponent},
  { path: 'routes', component: RoutesComponent},
  { path: 'stations', component: NewStationComponent},
  { path: '**',    component: NoContentComponent },
];
