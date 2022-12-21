import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community.component';
import { CommunityFaqComponent } from './components/community-faq/community-faq.component';

const routes: Routes = [{
  path:'',
  component:CommunityComponent
},
{
  path:'community-faq',
  component:CommunityFaqComponent


}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
