import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';
import { ReactComponent } from './react/react.component';
import { TutorialSharedModule } from './tutorial-shared/tutorial-shared.module';
import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';


@NgModule({
  declarations: [
    TutorialComponent,
    ReactComponent,
    TutorialDetailComponent
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    TutorialSharedModule
  ]
})
export class TutorialModule { }
