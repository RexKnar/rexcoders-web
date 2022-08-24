import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as AuthActions from "src/app/store/auth/auth.action";
import Swal from 'sweetalert2';
import { LoginPayload, RegistrationPayLoad } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';
import { ConsultationService } from '../../services/consultation.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  @ViewChild('closeSigninModal') closeSigninModal: ElementRef;
  @ViewChild('closeSignupModal') closeSignupModal: ElementRef;
  @ViewChild('close1to1Modal') close1to1Modal: ElementRef;
  @Input() header: any = 'home';
  userDetail: any;
  loginPayload: LoginPayload = new LoginPayload();
  registrationPayload:  RegistrationPayLoad = new RegistrationPayLoad();
  oneToOnePayload:any=new Object();
  isCheckout:boolean=false;
  isSignup:boolean=false;
  stateList:any;
  loginModal:HTMLElement;
  constructor(
    private store: Store<any>, 
    private authService: AuthService, 
    private localStorageService: LocalStorageService,
    private _commonService: CommonService,
    private _route: ActivatedRoute,
    private _consultationService: ConsultationService,
     private _router: Router) {
      this._commonService.getStateList().subscribe((stateData:any)=>{
        this.stateList=stateData.data.rows;
      })
    this.checkUser();
  }

  ngOnInit(): void {
    this._route.queryParams
    .subscribe((params:any) => {
      this.isCheckout =params.checkout;
      this.isSignup=params.signup;
    }
  );
  }

  checkUser() {
    this.store.select('auth').subscribe((data: any) => {
      
      this.userDetail = data;
      sessionStorage.setItem('currentUser', JSON.stringify(this.userDetail));
      
      if(this.isCheckout && this.userDetail.token)
      {
        document.getElementById("checkoutOpenBtn").click();
      }
    });
  }

  userLogin() {
    this.authService.studentLogin(this.loginPayload).subscribe((data: any) => {

      this.store.dispatch(new AuthActions.Login(data.data));
      this.closeSigninModal.nativeElement.click();
      this.checkUser();

    });


  }
  userSignup(){
    this.authService.studentRegisteration(this.registrationPayload).subscribe((data: any) => {
      const queryParams: Params = { signup: true };

      this._router.navigate(
        [], 
        {
          relativeTo: this._route,
          queryParams: queryParams, 
          queryParamsHandling: 'merge', // remove to replace all query params by provided
        });
      this.closeSignupModal.nativeElement.click();
      this.loginModal= document.getElementById('loginTrigger') as HTMLElement;
      this.loginModal.click();




    });
  }

bookConsultation()
{
  if(this.oneToOnePayload.studentName && this.oneToOnePayload.studentEmail && this.oneToOnePayload.studentMobile)
  {
  this._consultationService.bookConsultationt(this.oneToOnePayload).subscribe((data:any)=>{
    this.close1to1Modal.nativeElement.click();
    Swal.fire({
      icon: 'success',
      title: 'Successfully Booked ',
      text: 'Our experts will contact you ASAP'
    })
  },
  (error:any)=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops!  ',
      text: 'Something went wrong!'
    })
  })
  

}
else{
  Swal.fire({
    icon: 'error',
    title: 'Oops!  ',
    text: 'Please fill all the fields!'
  })
}
}
  logout() {
    this.localStorageService.clearLocalstorage();
    this.store.dispatch(new AuthActions.Logout());
  }



}
