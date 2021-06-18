import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [// {
  {
    path: '',
    //canActivate: [AuthGuard],
    //component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(mod => mod.DashboardModule)
      }
    ]
  },
  /*{
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'account',
        loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(mod => mod.AuthLayoutModule)
//      loadChildren: "./layouts/auth-layout/auth-layout.module#AuthLayoutModule"
      }
    ]
  }*//*,
  {
    path: "**",
    redirectTo: "dashboard"
  }*/];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
