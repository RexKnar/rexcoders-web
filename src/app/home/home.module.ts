import { PlacedCompaniesComponent } from './../shared/components/placed-companies/placed-companies.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeCategoryComponent } from './components/home-category/home-category.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
// import { SharedModule_1 as SharedModule } from "../shared/shared.module";


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
        // SharedModule_1
    ]
})
export class HomeModule { }
