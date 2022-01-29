import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeSliderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
