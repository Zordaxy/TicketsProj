import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { TicketsComponent } from './tickets/tickets.component';
import {AdminComponent} from './routes/admin.component';
import {RoutesComponent} from './routes/routes.component';
import {StationsComponent} from './stations/stations.component';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tickets', component: TicketsComponent},
  { path: 'routes', component: RoutesComponent},
  { path: 'stations', component:StationsComponent},
];
