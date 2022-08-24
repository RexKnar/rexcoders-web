import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AUTH_CONFIG, ROUTE_CONFIG, USER_CONFIG } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient) { }

  studentRegisteration(registrationPayload: any):Observable<any>{
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + AUTH_CONFIG.userRegistrationUrl, registrationPayload );
  }

  studentLogin(loginPayload:any):Observable<any>{
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + AUTH_CONFIG.loginUrl, loginPayload );
  }

  getUserDetailByToken():Observable<any>{
    return this.httpClient.get(ROUTE_CONFIG.baseUrl+USER_CONFIG.getUserByTokenUrl);
  }
}
