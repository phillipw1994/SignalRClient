import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    DashboardRoutingModule
  ],
  providers: [],
})
export class DashboardModule { }
