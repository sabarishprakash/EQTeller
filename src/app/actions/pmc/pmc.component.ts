import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { pmc } from '../../Models/pmc.model';
import { PmcService } from '../../Services/pmc.service';
import { CommonService } from 'src/app/Services/common.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { SimpleComponent } from '../../overlays/simple/simple.component';


@Component({
  selector: 'app-pmc',
  templateUrl: './pmc.component.html',
  styleUrls: ['./pmc.component.css']
})
export class PmcComponent implements OnInit {
  pmcForm: FormGroup;
  source: string[] = ['Account', 'Deal'];
  success = false;
  fromAccount = false;
  fromDeal = false;
  isPosting = false;
  errorGetCustomer: string;
  errorGetChargeCode: string;
  errorProcessing: string;
  fetchingCustomerName = false;
  fetchingChargeCodeName = false;
  customerName: string;
  chargeCodeName: string;
  postData: pmc;
  simpleDialogRef: MatDialogRef<SimpleComponent>;

  constructor(private common: CommonService,
    private process: PmcService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }


  private initForm() {
    this.pmcForm = new FormGroup({
      'branch': new FormControl(null),
      'account': new FormControl(null),
      'suffix': new FormControl(null),
      'chargeCode': new FormControl(null, Validators.required),
      'chargeAmount': new FormControl(null, Validators.required),
      'currency': new FormControl(null, Validators.required),
      'source': new FormControl(null, Validators.required),
      'dealRef': new FormControl(null)
    })
  }

  changeSource( ) {
   if (this.pmcForm.value['source'] === 'Account') {
      this.fromAccount = true;
      this.fromDeal = false;
      this.pmcForm.get('branch').setValidators([Validators.required]);
      this.pmcForm.get('account').setValidators([Validators.required]);
      this.pmcForm.get('suffix').setValidators([Validators.required]);
      this.pmcForm.get('dealRef').setValidators(null);
    }
    if (this.pmcForm.value['source'] === 'Deal') {
      this.fromDeal = true;
      this.fromAccount = false;
      this.pmcForm.get('branch').setValidators(null);
      this.pmcForm.get('account').setValidators(null);
      this.pmcForm.get('suffix').setValidators(null);
      this.pmcForm.get('dealRef').setValidators([Validators.required]);
    }
    if (this.pmcForm.value['source'] === 'Choose Source') {
      this.fromDeal = false;
      this.fromAccount = false;
      this.pmcForm.get('branch').setValidators(null);
      this.pmcForm.get('account').setValidators(null);
      this.pmcForm.get('suffix').setValidators(null);
      this.pmcForm.get('dealRef').setValidators(null);
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  getChargeCodeName() {
    this.errorGetChargeCode = null;
    this.fetchingChargeCodeName = true;
    const CHARGECODE = this.pmcForm.value['chargeCode'].toUpperCase();
    this.common.getChargeCodeName(CHARGECODE).subscribe(
      responseData => {
        this.fetchingChargeCodeName = false;
        this.chargeCodeName = responseData.FULLNAME;
      }, error => {
        this.fetchingChargeCodeName = false;
        this._snackBar.open(error.status + " Unable to Fetch Charge Code", "X", {
          duration: 3000,panelClass: ['blue-snackbar'],verticalPosition: 'bottom',horizontalPosition: 'end'
        });
      }
    );
  }

  getCustName() {
    this.fetchingCustomerName = true;
    this.errorGetCustomer = null;
    if (this.fromAccount) {
      const BASICNO = this.pmcForm.value['account'].toUpperCase();
      this.common.getCustomerName(BASICNO).subscribe(
        responseData => {
          this.fetchingCustomerName = false;
          this.customerName = responseData.FULLNAME;
        }, error => {
          this.fetchingCustomerName = false;
          this._snackBar.open(error.status + " Unable to Fetch Customer", "X", {
            duration: 3000,panelClass: ['blue-snackbar'],verticalPosition: 'bottom',horizontalPosition: 'end'
          });
        }
      ); 
    }
    else {
      const BRANCH = this.pmcForm.value['branch'].toUpperCase();
      const REF = this.pmcForm.value['dealRef'];
      this.common.getCustomerNameFromDeal(BRANCH,REF).subscribe(
        responseData => {
          this.fetchingCustomerName = false;
          this.customerName = responseData.FULLNAME;
        }, error => {
          this.fetchingCustomerName = false;
          this._snackBar.open(error.status + " Unable to Fetch Customer", "X", {
            duration: 3000,panelClass: ['blue-snackbar'],verticalPosition: 'bottom',horizontalPosition: 'end'
          });
        }
      );
    }
    
  }

  onSubmit() {
    this.isPosting = true;
    this.postData = new pmc(
      this.pmcForm.value['branch'],
      this.pmcForm.value['account'].toUpperCase(),
      this.pmcForm.value['suffix'],
      this.pmcForm.value['chargeCode'],
      this.pmcForm.value['chargeAmount']
    );
    console.log(this.postData);
    this.process.processPMC(this.postData).subscribe(
      responseData => {
        this.isPosting = false;
        //console.log(responseData.RETURNSTATUS + ' ' + responseData.ERRORMESSAGE);
        if (responseData.RETURNSTATUS === 'F') {
          this.errorProcessing = responseData.ERRORMESSAGE;
        } else {
          this.success = true;
        }
      }, error => {
        this.isPosting = false;
        this.errorProcessing = error.status;
        this.simpleDialogRef = this.dialog.open(SimpleComponent);
      }
    );
  }

  onCancel() {
    this.pmcForm.reset();
    this.isPosting = false;
    this.fromAccount = false;
    this.fromDeal = false;
    this.customerName = null;
    this.chargeCodeName = null;
  }

  dismissCustomerError() {
    this.errorGetCustomer = null;
    this.fetchingCustomerName = false;
  }

  dismissChargeCodeError() {
    this.errorGetChargeCode = null;
    this.fetchingChargeCodeName = false;
  }

  dismissProcessError() {
    this.errorProcessing = null;
  }

}
