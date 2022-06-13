import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as AuthActions from "src/app/store/auth/auth.action";
import { LoginPayload } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() header:any='home';
userDetail:any;
loginPayload:LoginPayload= new LoginPayload();
  constructor(private store: Store<any>, private authService: AuthService, private localStorageService:LocalStorageService ) {
     this.checkUser();
   }

  ngOnInit(): void {
       
  }
checkUser()
{
  this.store.select('auth').subscribe((data:any)=>{
    console.log(data);
    this.userDetail =data;
    sessionStorage.setItem('currentUser', JSON.stringify(this.userDetail));
  });
}
  userLogin()
  {
    console.log(this.loginPayload)
this.authService.studentLogin(this.loginPayload).subscribe((data:any)=>{

  this.store.dispatch(new AuthActions.Login(data.data) );
  this.checkUser();

});
    
       
  }

  logout()
  {
    this.localStorageService.clearLocalstorage();
    this.store.dispatch(new AuthActions.Logout() );
    this.checkUser();
  }

}
