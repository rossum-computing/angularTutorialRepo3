import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';


const routes: Routes = [
  { path : "userhomepage", component: UserHomePageComponent},
  { path: "userorders", component:UserOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule { }
