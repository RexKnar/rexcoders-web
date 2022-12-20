import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';
import { CommunityFaqComponent } from './components/community-faq/community-faq.component';
import { CommunityGuidelinesComponent } from './components/community-guidelines/community-guidelines.component';


@NgModule({
  declarations: [
    CommunityComponent,
    CommunityFaqComponent,
    CommunityGuidelinesComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule
  ]
})
export class CommunityModule { }
