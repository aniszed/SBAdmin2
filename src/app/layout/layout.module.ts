import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
 import {TopNavComponent} from '../shared/top-nav/top-nav.component';
 import {SideNavComponent} from '../shared/side-nav/side-nav.component';
import { LayoutComponent } from './layout.component';
import { TablesModule} from '../tables/tables.module';
import { FormsModule} from '../forms/forms.module';
import { DashboardModule} from '../dashboard/dashboard.module';

 

@NgModule({
    imports: [
        CommonModule,
    	RouterModule,  
    	TablesModule,
        FormsModule,
        DashboardModule
    ],
    declarations: [LayoutComponent,TopNavComponent,SideNavComponent],
    exports: [LayoutComponent,TopNavComponent,SideNavComponent]
})

export class LayoutModule { }