import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TablesRoutes } from '../tables/tables.routes';


export const DashboardRoutes: Route[] = [
  	{
    	path: '',
    	component: DashboardComponent,
 children: [
         ...TablesRoutes
     	]

  	}
];