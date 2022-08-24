import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { LocalStorageService } from "../services/local-storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    public authReq: any;
    constructor(private localStorageService: LocalStorageService ) {}
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let tokenData:any = this.localStorageService.getAuthorizationData();

        let newHeaders = req.headers;
        newHeaders = newHeaders.append('Access-Control-Allow-Origin', '*');

        if (tokenData) {
        this.authReq = req.clone({
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Access-Control-Allow-Origin' : '*',
              'Authorization': "Bearer " +tokenData.token,    
            }),
          });

        } else {
            this.authReq = req.clone({
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Access-Control-Allow-Origin' : '*',  
                }),
              });
        }

        return next.handle(this.authReq);

    }


    

}

