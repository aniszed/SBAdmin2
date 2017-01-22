import { Route } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { TablesRoutes } from '../tables/tables.routes';
import { FormsRoutes } from '../forms/forms.routes';
import { DashboardRoutes } from '../dashboard/dashboard.routes';


export const LayoutRoutes: Route[] = [
  	{
    	path: '',
    	component: LayoutComponent,
 children: [
         ...TablesRoutes,
		 ...FormsRoutes,
		 ...DashboardRoutes
     	]

  	}
];