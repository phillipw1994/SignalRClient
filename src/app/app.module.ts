import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreenStateService } from './services/splash-screen-state.service';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { HomepageResolver } from './resolvers/homepage.resolver';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    LoadingComponent,
    SplashScreenComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning',
      },
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
  ],
  providers: [SplashScreenStateService,
    HomepageResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
