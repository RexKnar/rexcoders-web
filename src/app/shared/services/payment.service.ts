import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PAYMENT_CONFIG, ROUTE_CONFIG } from '../models/constants'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  paymentUrl =ROUTE_CONFIG.baseUrl;
  constructor(private readonly _httpClient: HttpClient) {}

  createOrder(trainingData:any): Observable<any> {
  
    const apiUrl = ROUTE_CONFIG.baseUrl + PAYMENT_CONFIG.createOrderUrl;
    return this._httpClient.post<Observable<any>>(apiUrl,trainingData);
  } 
  

  verifyPayment(payload:any): Observable<any> {

    const apiUrl = ROUTE_CONFIG.baseUrl + PAYMENT_CONFIG.updateOrderUrl;
    return this._httpClient.post<Observable<any>>(apiUrl, payload);
  }


  



}

