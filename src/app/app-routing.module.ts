import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileDashboardComponent } from './mobile-dashboard/mobile-dashboard.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';


const routes: Routes = [
  { path: "mobiledashboard", component: MobileDashboardComponent },
  { path: "mobileview", component: MobileViewComponent},
  { path: "userhome", loadChildren: () => import("./user-home/user-home.module").then(m => m.UserHomeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
