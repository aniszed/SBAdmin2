import { Routes } from '@angular/router';

 import { LayoutRoutes } from './layout/layout.routes';
 import { LoginRoutes } from './login/login.routes'; 
  import { LoginComponent } from './login/login.component'; 

export const routes: Routes = [
  	...LayoutRoutes,
    ...LoginRoutes,
   {path : "" , component : LoginComponent}

 ];
