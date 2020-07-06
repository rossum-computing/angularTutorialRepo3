import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../shared/mobiles.service';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.scss']
})
export class MobileViewComponent implements OnInit {
  mobileView: any;
  flag = true;

  constructor(public mobilesService : MobilesService) { 
    setTimeout(()=>{
      this.flag=false;
    }, 500)
    this.mobileView = mobilesService.mobileViewOutput()
    console.log(this.mobileView)
  }

  ngOnInit() {
  }

}
