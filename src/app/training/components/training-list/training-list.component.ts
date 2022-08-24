import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DomainService } from 'src/app/shared/services/domain.service';
import { TrainingService } from 'src/app/shared/services/training.service';

import * as TrainingActions from 'src/app/store/training/training.action';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.scss'],
})
export class TrainingListComponent implements OnInit {
  trainingList: any;
  trainings: any;
  domainList:any;

  searchKey: string = '';
  domainKey: number = 0;
  constructor(
    private readonly _store: Store<any>,
    private readonly _trainingService: TrainingService,
    private readonly _domainService: DomainService
  ) {
    this.loadTrainingList();
    this.getDomainList();
  }

  ngOnInit(): void {}

  loadTrainingList() {
    this._store.select('training').subscribe((data: any) => {
      if(data?.rows?.length) {
        this.trainingList = data.rows;
      } else {
        this._trainingService
          .getTrainingList()
          .subscribe((trainingData: any) => {
            if (trainingData?.rows?.length) {
              this.trainingList = trainingData.rows;
              this._store.dispatch(
                new TrainingActions.LoadTraningList(trainingData)
              );
            }
          });
      }
      this.trainingFilter();
    });
  }

  trainingFilter() {
    this.trainings = this.trainingList.filter((training) => {
      if (this.domainKey && this.searchKey) {
        if (
          training.domain.domainId == this.domainKey &&
          training.trainingName
            .toLowerCase()
            .indexOf(this.searchKey.toLowerCase()) !== -1
        ) {
          return training;
        }
      } else if (!this.domainKey && this.searchKey) {
        return (
          training.trainingName
            .toLowerCase()
            .indexOf(this.searchKey.toLowerCase()) !== -1
        );
      } else if (this.domainKey && !this.searchKey) {
        return training.domain.domainId == this.domainKey;
      } else {
        return training;
      }
    });
  }

  getDomainList(){
    this._domainService.getDomainList().subscribe((data:any)=>{
      this.domainList=data.data.rows;
    })
  }
}
