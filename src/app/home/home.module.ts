
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeCategoryComponent } from './components/home-category/home-category.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';



@NgModule({
    declarations: [
        HomeSliderComponent,
        HomeComponent,
        HomeCategoryComponent,
        HomeBannerComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        SlickCarouselModule,

    ]
})
export class HomeModule { }
