import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community.component';
import { CommunityFaqComponent } from './components/community-faq/community-faq.component';
import { CommunityLandingAreaComponent } from './components/community-landing-area/community-landing-area.component';

const routes: Routes = [{
  path:'',
  component:CommunityComponent
},
{
  path:'community-faq',
  component:CommunityFaqComponent


},{
  path:'community-landing-area',
  component:CommunityLandingAreaComponent
  
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
