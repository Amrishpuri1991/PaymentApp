import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetails } from '../shared/payment-details.model';
import { PaymentDetailsService } from '../shared/payment-details.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: []
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service : PaymentDetailsService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(selectedRecord:PaymentDetails){
    this.service.formData = Object.assign({}, selectedRecord);

  }
  delete(id:number){
    if(confirm('Are you sure you want to delete this record ?')){
    this.service.deletePaymentDetails(id)
    .subscribe(
      res => {
        this.service.refreshList();
        this.toastr.error("Deleted successfully","payment Register")
      },
      err=> {console.log(err);}
    )
  }
}
}
