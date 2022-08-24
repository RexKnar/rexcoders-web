import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DOMAIN_CONFIG, ROUTE_CONFIG } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor(private readonly httpClient: HttpClient) { }

  getDomainList():Observable<any>{
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + DOMAIN_CONFIG.getDomainListUrl );
  }

  
}
