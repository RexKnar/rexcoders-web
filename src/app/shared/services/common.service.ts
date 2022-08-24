import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BATCH_CONFIG, ROUTE_CONFIG, STATE_CONFIG } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private readonly httpClient: HttpClient) { }

  getStateList():Observable<any>{
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + STATE_CONFIG.getStateListUrl );
  }
  getBatchList():Observable<any>{
    return this.httpClient.get(ROUTE_CONFIG.baseUrl+ BATCH_CONFIG.getBatchListUrl);
  }
}
