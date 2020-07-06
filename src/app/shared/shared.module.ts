import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material/';
import { MobilesService } from './mobiles.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [
    MobilesService
  ]
})
export class SharedModule { }
