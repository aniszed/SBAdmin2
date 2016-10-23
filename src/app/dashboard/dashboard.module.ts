import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
 import {TopNavComponent} from '../shared/top-nav/top-nav.component';
 import {SideNavComponent} from '../shared/side-nav/side-nav.component';
import { DashboardComponent } from './dashboard.component';
import { TablesModule} from '../tables/tables.module';

 

@NgModule({
    imports: [
        CommonModule,
    	RouterModule,  
    	TablesModule,
    ],
    declarations: [DashboardComponent,TopNavComponent,SideNavComponent],
    exports: [DashboardComponent,TopNavComponent,SideNavComponent]
})

export class DashboardModule { }