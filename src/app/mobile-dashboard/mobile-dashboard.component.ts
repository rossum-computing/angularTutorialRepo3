import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../shared/mobiles.service';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {

  mobileData : any;


  constructor(public mobilesService: MobilesService) { 
    // console.log(mobilesService.mobileData)
    this.mobileData = mobilesService.mobileData
  }

  ngOnInit() {
  }
  view(mobileName) {
    // console.log(mobileName)
    this.mobilesService.mobileViewInput(mobileName)
  }

}
