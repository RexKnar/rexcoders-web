import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingListComponent } from './components/training-list/training-list.component';
import { TrainingDetailsComponent } from './components/training-details/training-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TrainingListComponent,
    TrainingDetailsComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    SharedModule
  ]
})
export class TrainingModule { }
