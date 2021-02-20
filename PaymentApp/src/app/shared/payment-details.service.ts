import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { PaymentDetails } from './payment-details.model';
import{HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  constructor(private http:HttpClient) { }
  
  formData:PaymentDetails = new PaymentDetails();
list: PaymentDetails[];
  readonly baseUrl="http://localhost:50507/api/PaymentDetail"

  postPaymentDetails(){
      return this.http.post(this.baseUrl,this.formData)
      }
      putPaymentDetails(){
        return this.http.put(`${this.baseUrl}/${this.formData.paymentDetailID}`,this.formData);
        }

      refreshList(){
        this.http.get(this.baseUrl)
        .toPromise()
        .then(res => this.list = res as PaymentDetails[]);
      }

      deletePaymentDetails(id:number){
        return this.http.delete(`${this.baseUrl}/${id}` );
      }

}
