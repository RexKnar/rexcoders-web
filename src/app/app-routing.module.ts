import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelayoutComponent } from './theme/homelayout/homelayout.component';
import { PagelayoutComponent } from './theme/pagelayout/pagelayout.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomelayoutComponent,
    loadChildren:() => import('./home/home.module').then((module) => module.HomeModule),
  },
  
  {
    path:'who-we-are',
    component:PagelayoutComponent,
    loadChildren:() => import('./about/about.module').then((module) => module.AboutModule),
  },
  {
    path:'pages',
    component:PagelayoutComponent,
    loadChildren:() => import('./pages/pages.module').then((module) => module.PagesModule),
  },
  {
    path:'contact',
    component:PagelayoutComponent,
    loadChildren:() => import('./contact-us/contact-us.module').then((module) => module.ContactUsModule),
  },
  {
    path:'trainings',
    component:PagelayoutComponent,
    loadChildren:() => import('./training/training.module').then((module) => module.TrainingModule),
  },
  {
    path:'tutorial',
    component:PagelayoutComponent,
    loadChildren:()=>import('./tutorial/tutorial.module').then((module)=>module.TutorialModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
