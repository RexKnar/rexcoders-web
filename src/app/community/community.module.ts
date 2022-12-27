import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';
import { CommunityFaqComponent } from './components/community-faq/community-faq.component';
import { CommunityGuidelinesComponent } from './components/community-guidelines/community-guidelines.component';
import { HomeComponent } from './components/home/home.component';
import { CommunityLandingAreaComponent } from './components/community-landing-area/community-landing-area.component';


@NgModule({
  declarations: [
    CommunityComponent,
    CommunityFaqComponent,
    CommunityGuidelinesComponent,
    HomeComponent,
    CommunityLandingAreaComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    
  ]
})
export class CommunityModule { }
