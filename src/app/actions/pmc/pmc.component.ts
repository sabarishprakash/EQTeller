import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { pmc } from '../../Models/pmc.model';
import { PmcService } from '../../Services/pmc.service';
import { CommonService } from 'src/app/Services/common.service';

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
  fetchingCustomerName = false;
  fetchingChargeCodeName = false;
  result = { RETURNSTATUS: ' ', ERRORMESSAGE: ' ' };
  customerName: string;
  chargeCodeName: string;
  postData: pmc = new pmc('0001', 'X00378', '011', 'A8', '1000');

  constructor(private common: CommonService,
    private process: PmcService) { }


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

  submitForm() {

  }

  getChargeCodeName() {
    this.fetchingChargeCodeName = true;
    const CHARGECODE = this.pmcForm.value['chargeCode'].toUpperCase();
    this.common.getChargeCodeName(CHARGECODE).subscribe(
      responseData => {
        this.fetchingChargeCodeName = false;
        this.chargeCodeName = responseData.FULLNAME;
      }
    );
  }

  getCustName() {
    this.fetchingCustomerName = true;
    if (this.fromAccount) {
      const BASICNO = this.pmcForm.value['account'].toUpperCase();
      this.common.getCustomerName(BASICNO).subscribe(
        responseData => {
          this.fetchingCustomerName = false;
          this.customerName = responseData.FULLNAME;
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
        }
      );
    }
    
  }

  onSubmit() {
    this.isPosting = true;
    this.postData.BRANCH = this.pmcForm.value['branch'];
    this.postData.ACCOUNT = this.pmcForm.value['account'].toUpperCase();
    this.postData.SUFFIX = this.pmcForm.value['suffix'];
    this.postData.CHARGE_CODE = this.pmcForm.value['chargeCode'];
    this.postData.CHARGE_AMOUNT = this.pmcForm.value['chargeAmount'];
    console.log(this.postData);
    this.process.processPMC(this.postData).subscribe(
      responseData => {
        this.isPosting = false;
        console.log(responseData.RETURNSTATUS + ' ' + responseData.ERRORMESSAGE);
        Object.assign(this.result, responseData);
        this.onCancel();
      })

  }

  onCancel() {
    this.pmcForm.reset();
  }

}
