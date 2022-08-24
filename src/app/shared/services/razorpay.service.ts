import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VerifyPayment } from '../models/payment.model';
import { AuthService } from './auth.service';
import { PaymentService } from './payment.service';
import { TrainingService } from './training.service';
import { Store } from '@ngrx/store';
import { WindowRef } from './window-ref.service';
import Swal from 'sweetalert2';
declare var Razorpay: any;

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {
  options: any;
  environment = environment;
  userData: any;
  userDetails: any;
  trainingId: any;
  redirectUrl: any;
  rzp1: any;
  WebinarDetial: any;
  insertOrder: any;
  public amount = 0;
  trainingDetail: any;
  verifyPaymentRequest: VerifyPayment = new VerifyPayment();


  constructor(
    private winRef: WindowRef,
    private _trainingService: TrainingService,
    private _paymentService: PaymentService,
    private readonly _razorPaymentService: PaymentService,
    private readonly _userService: AuthService,
    private store: Store<any>,) {

    this.store.select('auth').subscribe((data: any) => {

      if (data?.token) {
        this._userService.getUserDetailByToken().subscribe((userData: any) => {
          this.userDetails = userData.data;
        })
      }

    });



  }





  purchase(trainingData: any) {
    this.userData = JSON.parse(sessionStorage.getItem('currentUser'));
    if (this.userData == null) {
      alert(
        'Please login to buy course'
      );
    }
    else {
      this._trainingService.getTrainingDetail(trainingData.trainingId).subscribe((data: any) => {
        this.trainingDetail = data;
        if (trainingData.trainingType == 1) {
          this.amount = (this.trainingDetail.onlineDicount) * 100;
        }
        else {
          this.amount = (this.trainingDetail.dicountAmount) * 100;
        }



      });
      this._paymentService.createOrder(trainingData).subscribe((data: any) => {
        this.insertOrder = data.data;
        if (data.data.razorOrderNo) {
          this.initPay(data.data);
        }
        else {
          alert(
            'Course Already Purchased'
          );
        }


      });
    }
  }

  // Razor pay
  public initPay(order): void {
    this._userService.getUserDetailByToken().subscribe((userData: any) => {

      this.userDetails = userData.data;
      this.userData = JSON.parse(sessionStorage.getItem('currentUser'));

      this.options = {
        key: environment.razorpayKey,
        amount: order.amountAfterDiscount,
        currency: 'INR',
        order_id: order.razorOrderNo,
        accept_partial: true,
        first_min_partial_amount: (10000 * 100),
        name: 'Rexcoders Coding Academy',
        prefill: {
          name: this.userDetails.name,
          email: this.userDetails.email,
          contact: this.userDetails.mobile,
        },
        modal: {
          // We should prevent closing of the form when esc key is pressed.
          escape: false,
        },
        handler: (response) => {
          this.verifyPaymentRequest.razorPaymentId = response.razorpay_payment_id;
          this.verifyPaymentRequest.razorOrderNo = response.razorpay_order_id;
          this.verifyPaymentRequest.razorSignature = response.razorpay_signature;
          this.verifyPaymentRequest.paymentStatus = 1;

          this._razorPaymentService.verifyPayment(this.verifyPaymentRequest).subscribe((message: any) => {
            if (message.status) {

              Swal.fire({
                icon: 'success',
                title: 'Successfully Enrolled ',
                text: 'Thanks For Choosing Rexcoders!',
                footer: '<a href="/">Back to Home.</a>'
              })
              document.getElementById("checkoutCloseBtn").click();
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops!  ',
                text: 'Something went wrong!'
              })

            }
          }, (error: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops!  ',
              text: 'Something went wrong!'
            })
          });
        }
      };
      this.options.modal.ondismiss = (() => {
        
          this.verifyPaymentRequest.paymentStatus = 2;
          this.verifyPaymentRequest.razorOrderNo=order.razorOrderNo;

          this._razorPaymentService.verifyPayment(this.verifyPaymentRequest).subscribe((response: any) => {
            console.log('Transaction cancelled.');
        Swal.fire({
          icon: 'error',
          title: 'Error!  ',
          text: 'Transaction Cancelled!'
        })
          },(error:any)=>{
            Swal.fire({
              icon: 'error',
              title: 'Error!  ',
              text: 'Transaction Cancelled!'
            })
          });
        
      });
      this.rzp1 = new this.winRef.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
    })

  }






}
