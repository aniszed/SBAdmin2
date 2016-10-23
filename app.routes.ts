import { Routes } from '@angular/router';

 import { DashboardRoutes } from './dashboard/dashboard.routes';
 import { Loginroutes } from './login/login.routes'; 
  import { LoginComponent } from './login/login.component'; 

export const routes: Routes = [
 	...DashboardRoutes,
     ...Loginroutes,
   {path : "" , component : LoginComponent}

 ];
