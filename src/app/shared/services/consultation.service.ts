import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSULT_CONFIG, ROUTE_CONFIG } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private readonly httpClient: HttpClient) { }

  bookConsultationt(bookingPayload:any):Observable<any>{
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + CONSULT_CONFIG.bookConsultationUrl, bookingPayload );
  }

}
