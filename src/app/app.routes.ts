import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import { TicketsComponent } from './tickets/tickets.component';
import {AdminComponent} from './admin/admin.component';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: 'tickets', component: TicketsComponent},
  { path: 'admin', component: AdminComponent},
  { path: '**',    component: NoContentComponent },
];
