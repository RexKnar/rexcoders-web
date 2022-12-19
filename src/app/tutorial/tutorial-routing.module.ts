import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactComponent } from './react/react.component';
import { TutorialCardComponent } from './tutorial-shared/components/tutorial-card/tutorial-card.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'react',
    pathMatch:'full'
  },
  {
    path:'react',
    component:ReactComponent
  },
  {
    path:'tutorial-list',
    component:TutorialCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
