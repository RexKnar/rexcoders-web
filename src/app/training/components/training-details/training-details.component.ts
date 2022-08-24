import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonService } from 'src/app/shared/services/common.service';
import { RazorpayService } from 'src/app/shared/services/razorpay.service';
import { TrainingService } from 'src/app/shared/services/training.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {
  loginModal:HTMLElement = document.getElementById('loginTrigger') as HTMLElement;
trainingId:string;
trainingTypeDetail:number;
trainingType:number;
checkoutAmount:number=0;
trainingBatch:any=0;
trainingTime:any=0;
batchDetail:string='Choose a Batch';
batchList:any;
couponCode:string;
couponStatus:boolean=false;
couponMessage:string=''
isLogged:boolean=false;
paymentData:any={};
isCheckout=false;
tokenData = JSON.parse(sessionStorage.getItem('currentUser'));
userDetail:any;
syllabusList:any;
syllabusLists:any;

  constructor(
    private readonly _store: Store<any>, 
    private readonly _trainingService: TrainingService, 
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _razorpayService: RazorpayService,
    private readonly _commonService: CommonService,
    private _titleService: Title,
     private _router: Router){
     this._activatedRoute.params.subscribe((queryParams:any)=>{
      
      this.trainingId=queryParams['slug'];
      this.getPageTitle(this.trainingId);
      
      this.loadTrainingDetail();
      this.getbatchList();
      })
     }


  trainingData:any;
  ngOnInit(): void {
   
  }

  async getPageTitle(titleword)
  {
    const words = titleword.split("-");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  let title=words.join(' ');
  this._titleService.setTitle(title);
  }
  validateCoupon()
  {
this.couponMessage='Invalid Coupon!';
  }
changeMedium(){
  
  this.checkoutAmount=(this.trainingType==1 )?this.trainingData.onlineDiscount:this.trainingData.discountAmount;
  this.trainingTypeDetail=this.trainingType

}
changeMediumDetail(){
  this.checkoutAmount=(this.trainingTypeDetail==1 )?this.trainingData.onlineDiscount:this.trainingData.discountAmount;
this.trainingType=this.trainingTypeDetail;

}

  loadTrainingDetail() {

  
// this.syllabusLists=JSON.stringify(this.syllabusList);
// console.log(this.syllabusLists)
        this._trainingService.getTrainingDetail(this.trainingId).subscribe((data:any)=>{
          if(data)
      {
        this.syllabusList=JSON.parse(data.syllabus);
   
        this.trainingData = data;
        this.trainingType=(data.medium==0 || data.medium==2)?1:2;
        this.trainingTypeDetail=this.trainingType;
        this.checkoutAmount=(this.trainingType==1 )?this.trainingData.onlineDiscount:this.trainingData.discountAmount;
      
      }
        })
      
  
  }

  getbatchList()
  {
    this._commonService.getBatchList().subscribe((data:any)=>{

      this.batchList=data.data.rows;
    })
  }
  chooseBatch()
  {
    
    switch(this.trainingBatch)
    {
      case '1':
          this.batchDetail='Morning(9am-11am)';
          break;
      case '2':
          this.batchDetail='Afternoon(2pm-4pm)';
          break;
      case '3':
          this.batchDetail='Evening(5pm-7pm)';
          break;
      case '4':
          this.batchDetail='Night(9:00pm-10:30pm)';
          break;
      default:
          this.batchDetail='MChoose a Batch';
          break;
        
        
    }
  }

  checkout()
  {
   
   if(this.trainingTime && this.trainingBatch)
   {
    console.log(this.trainingTime)
    this.paymentData.trainingType=this.trainingType;
    this.paymentData.trainingId=this.trainingId;
    this.paymentData.couponCode='';
    this.paymentData.batch=this.trainingBatch;
    this.paymentData.batchTiming=this.trainingTime;
    this.paymentData.userId=this.tokenData.userId;
    
      if(this.tokenData?.details?.name==null){
        this.isCheckout=true;
        this.isLogged=false;
        this.triggerSignin();
        
      }else{
        
        this.isLogged=true;
        this._razorpayService.purchase(this.paymentData)
      }
      

   }
   else{
    Swal.fire({
      icon: 'error',
      title: 'Invalid Data!  ',
      text: 'Please choose prefered batch and timing!'
    })
   }
    }
  triggerSignin()
  {
    this.loginModal.click();
    this._store.select('auth').subscribe((data: any) => {
  
      this.tokenData = data;
      sessionStorage.setItem('currentUser', JSON.stringify(this.tokenData));
    
    });
  }

  openCheckout(){
   
    const queryParams: Params = { checkout: true };

    this._router.navigate(
      [], 
      {
        relativeTo: this._activatedRoute,
        queryParams: queryParams, 
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
      
      if(this.tokenData?.details?.name==null){
        this.isCheckout=true;
        this.isLogged=false;
        this.triggerSignin();
        
      }else{
        document.getElementById("checkoutOpenBtn").click();
      }
  }

}
