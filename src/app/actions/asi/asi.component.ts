import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/Services/common.service';
import { AsiService } from 'src/app/Services/asi.service';
import { asi } from 'src/app/Models/asi.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-asi',
  templateUrl: './asi.component.html',
  styleUrls: ['./asi.component.css']
})
export class AsiComponent implements OnInit {

  asiForm: FormGroup;
  isPosting = false;
  errorGetCustomer: string;
  errorGetTranCode: string;
  fetchingCustomerName = false;
  fetchingTranName = false;
  customerName: string;
  transactionCodeName: string;
  postData: asi;
  errorProcessing: string;
  success = false;

  constructor(private common: CommonService,
    private process: AsiService,
    private location: Location) { }

  private initForm() {
    this.asiForm = new FormGroup({
      'branch': new FormControl(null, Validators.required),
      'account': new FormControl(null, Validators.required),
      'suffix': new FormControl(null, Validators.required),
      'tranCode': new FormControl(null, Validators.required),
      'currency': new FormControl('AOA', Validators.required),
      'amount': new FormControl(null, Validators.required),
      'comments': new FormControl(null)
    })
  }

  ngOnInit(): void {
    this.initForm();
  }

  getCustName() {
    this.fetchingCustomerName = true;
    this.errorGetCustomer = null;
      const BASICNO = this.asiForm.value['account'].toUpperCase();
      this.common.getCustomerName(BASICNO).subscribe(
        responseData => {
          this.fetchingCustomerName = false;
          this.customerName = responseData.FULLNAME;
        }, error => {
          this.fetchingCustomerName = false;
          this.errorGetCustomer = error.status;
          console.log(error.error);
        }
      ); 
  }

  onCancel() {
    this.isPosting = true;
    this.asiForm.reset(); 
    this.isPosting = false;
  }

   onSubmit() {
     this.isPosting = true;
     this.postData = new asi(
      this.asiForm.value['branch'],
      this.asiForm.value['account'].toUpperCase(),
      this.asiForm.value['suffix'],
      this.asiForm.value['tranCode'].toString(),
      this.asiForm.value['currency'],
      this.asiForm.value['amount'].toString(),
      this.asiForm.value['comments']
     )
     console.log(this.postData);
    this.process.processASI(this.postData).subscribe(
      responseData => {
        this.isPosting = false;
        console.log(responseData.RETURNSTATUS + ' ' + responseData.ERRORMESSAGE);
        if(responseData.RETURNSTATUS === 'F') {
          this.errorProcessing = responseData.ERRORMESSAGE;
        } else {
          this.success = true;
        }
      }, error => {
        this.isPosting = false;
        this.errorProcessing = error.status; 
      })

   }

   getTransactionCodeName() {
    this.fetchingTranName = true;
    this.errorGetTranCode = null;
      const TRANSACTION_CODE = this.asiForm.value['tranCode'];
      this.common.getTransactionCodeName(TRANSACTION_CODE).subscribe(
        responseData => {
          this.fetchingTranName = false;
          this.transactionCodeName = responseData.FULLNAME;
        }, error => {
          this.fetchingTranName = false;
          this.errorGetCustomer = error.status;
          console.log(error.error);
        }
      ); 
   }

   dismissProcessError() {
    this.errorProcessing = null;
  }

  dismissTransactionCodeError() {
    this.errorGetTranCode = null;
  }

  dismissCustomerError() {
    this.errorGetCustomer = null;
  }
}
