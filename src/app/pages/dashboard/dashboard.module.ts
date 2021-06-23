import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ],
  providers: [],
})
export class DashboardModule { }
