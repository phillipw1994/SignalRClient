import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageResolver } from "src/app/resolvers/homepage.resolver";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            component: HomeComponent
          }
        ]
      }
    ],
    component: HomeComponent,
    resolve: {'itemsList': HomepageResolver}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class DashboardRoutingModule {}
