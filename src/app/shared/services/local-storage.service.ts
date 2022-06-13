import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private logger = new Subject<boolean>();
  public setAuthorizationData(auth: any): void {
    sessionStorage.setItem('currentUser', JSON.stringify(auth));
}
public getAuthorizationData(): any {
    const tokenData = JSON.parse(sessionStorage.getItem('currentUser'));
    return tokenData == null ? null : tokenData;
}

public setAffliationId(userId:string):void{
    sessionStorage.setItem('affliationId',userId);
}

public getAffliationId(): string {
    const affliationId = sessionStorage.getItem('affliationId');
    return affliationId == null ? null : affliationId;
}

public clearLocalstorage()
{
    sessionStorage.removeItem('currentUser');
}

public getUserDetails()
{
    const userData= JSON.parse(sessionStorage.getItem('currentUser'));

    return userData == null ? null : userData.userData;   
}

public getUserDetailsPromis()
{
    const userData= JSON.parse(sessionStorage.getItem('currentUser'));

    // return userData == null ? null : userData.userData;   
    return userData==null? this.logger.next(null) : this.logger.next(userData)
}
} 