import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileDashboardComponent } from './mobile-dashboard/mobile-dashboard.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { UserHomeModule } from './user-home/user-home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MobileDashboardComponent,
    MobileViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserHomeModule,
    BrowserAnimationsModule,
    SharedModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
