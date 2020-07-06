import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { SharedModule } from '../shared/shared.module';
import { UserOrdersComponent } from './user-orders/user-orders.component';

@NgModule({
  declarations: [UserHomePageComponent, UserOrdersComponent],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    SharedModule
  ]
})
export class UserHomeModule { }
