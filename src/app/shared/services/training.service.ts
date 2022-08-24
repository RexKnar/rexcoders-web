import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TRAINING_CONFIG, ROUTE_CONFIG } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private readonly httpClient: HttpClient) { }

  getTrainingList():Observable<any>{
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + TRAINING_CONFIG.getTrainingListUrl );
  }

  getTrainingDetail(trainingId:any):Observable<any>{
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + TRAINING_CONFIG.getTrainingDetailUrl+trainingId );
  }
}
