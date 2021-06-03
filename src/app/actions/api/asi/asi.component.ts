import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/Services/common.service';
import { AsiService } from 'src/app/Services/asi.service';
import { asi } from 'src/app/Models/asi.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { SimpleComponent } from '../../../overlays/simple/simple.component';
import { ActivatedRoute } from '@angular/router';
import { ActionsService } from 'src/app/Services/actions.service';

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
  simpleDialogRef: MatDialogRef<SimpleComponent>;

  constructor(private common: CommonService,
    private process: AsiService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private service: ActionsService) { }

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
    console.log('ASI Loaded!');
    this.route.data.subscribe(data => {
      console.log(data);
      this.service.headingChange(data.heading);
    });
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
          this._snackBar.open(error.status + " Unable to Fetch Customer", "X", {
            duration: 3000,panelClass: ['blue-snackbar'],verticalPosition: 'bottom',horizontalPosition: 'end'
          });
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
        this.simpleDialogRef = this.dialog.open(SimpleComponent);
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
          this._snackBar.open(error.status + " Unable to Fetch Transaction Code", "X", {
            duration: 3000,panelClass: ['blue-snackbar'],verticalPosition: 'bottom',horizontalPosition: 'end'
          });
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