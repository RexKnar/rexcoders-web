import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingListComponent } from './components/training-list/training-list.component';
import { TrainingDetailsComponent } from './components/training-details/training-details.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    TrainingListComponent,
    TrainingDetailsComponent, 
   
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    NgbModule,
    SharedModule,
    FormsModule
  ]
})
export class TrainingModule { }
