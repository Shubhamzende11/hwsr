import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WidgetsModule } from '../../_metronic/partials';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, WidgetsModule,
  
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
   

  ],
})
export class DashboardModule {
 
}
