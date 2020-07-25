import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { pmc } from '../../Models/pmc.model';
import { PmcService } from '../../Services/pmc.service';
import { CommonService } from 'src/app/Services/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pmc',
  templateUrl: './pmc.component.html',
  styleUrls: ['./pmc.component.css']
})
export class PmcComponent implements OnInit {
  pmcForm: FormGroup;
  source: string[] = ['Account', 'Deal'];
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

  constructor(private common: CommonService,
    private process: PmcService,
    private location: Location) { }


  private initForm() {
    this.pmcForm = new FormGroup({
      'branch': new FormControl(null),
      'account': new FormControl(null),
      'suffix': new FormControl(null),
      'chargeCode': new FormControl(null, Validators.required),
      'chargeAmount': new FormControl(0.00, Validators.required),
      'currency': new FormControl('AOA', Validators.required),
      'source': new FormControl(null, Validators.required),
      'dealRef': new FormControl(null)
    })
  }

  changeSource() {
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
        this.errorGetChargeCode = error.status;
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
          this.errorGetCustomer = error.status;
          console.log(error.error);
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
          this.errorGetCustomer = error.status;
          console.log(error.error);
          console.log(error);
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
        console.log(responseData.RETURNSTATUS + ' ' + responseData.ERRORMESSAGE);
        if (responseData.RETURNSTATUS === 'F') {
          this.errorProcessing = responseData.ERRORMESSAGE;
        } else {
          this.onCancel();
          //Navigate to previous page
          this.location.back();
        }
      }, error => {
        this.isPosting = false;
        this.errorProcessing = error.status;
      }
    );
  }

  onCancel() {
    this.pmcForm.reset();
  }

  dismissCustomerError() {
    this.errorGetCustomer = null;
  }

  dismissChargeCodeError() {
    this.errorGetChargeCode = null;
  }

  dismissProcessError() {
    this.errorProcessing = null;
  }

}
