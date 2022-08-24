export class VerifyPayment {
    razorOrderNo: string;
    razorPaymentId: string;
  razorSignature: string;
  paymentStatus:number;
  }

  export class Payment{
    
      entity:string;
      account_id: string
      event:string;
      contains: [
          payment:string,
          order:string,
      ]
      payload: {
          payment: {
              entity: {
                  id: string
                  entity: string
                  amount: 100;
                  currency: string
                  status: string
                  order_id: string
                  invoice_id: string
                  international:boolean;
                  method: string
                  amount_refunded: 0;
                  refund_status:string
                  captured: boolean;
                  description:string;
                  card_id: string;
                  bank:string;
                  wallet: string;
                  vpa:string;
                  email: string;
                  contact: string;
                  notes: [];
                  fee: number;
                  tax: number;
                  error_code: null;
                  error_description: null;
                  created_at: string;
              }
          },
          order: {
              entity: {
                  id: string;
                  entity: string;
                  amount: number;
                  amount_paid: number;
                  amount_due: number;
                  currency: string;
                  receipt:string;
                  offer_id: null,
                  status: string;
                  attempts: number;
                  notes: [];
                  created_at: string;
              }
          }
      }
      created_at: string;
  }
