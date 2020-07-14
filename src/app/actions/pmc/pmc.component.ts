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
  isPosting = false;
  fetchingCustomerName = false;
  fetchingChargeCodeName = false;
  result = {RETURNSTATUS: ' ',ERRORMESSAGE: ' '};
  customerName: string;
  chargeCodeName: string;
  postData: pmc = new pmc('0001','X00378','011','A8','1000');

  constructor(private common: CommonService,
              private process: PmcService ) { }

  private initForm() {
    this.pmcForm = new FormGroup ({
      'branch': new FormControl(null, Validators.required),
      'account': new FormControl(null, Validators.required),
      'suffix': new FormControl(null, Validators.required),
      'chargeCode': new FormControl(null, Validators.required),
      'chargeAmount': new FormControl(0.00, Validators.required),
      'currency': new FormControl('AOA', Validators.required)
    })  
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
    const BASICNO = this.pmcForm.value['account'].toUpperCase();
    this.common.getCustomerName(BASICNO).subscribe(
      responseData => {
        this.fetchingCustomerName = false;
        this.customerName = responseData.FULLNAME;
      }
    );
  }

  onSubmit() {
    this.isPosting = true;
    this.postData.BRANCH = this.pmcForm.value['branch'];
    this.postData.ACCOUNT = this.pmcForm.value['account'].toUpperCase();
    this.postData.SUFFIX= this.pmcForm.value['suffix'];
    this.postData.CHARGE_CODE = this.pmcForm.value['chargeCode'];
    this.postData.CHARGE_AMOUNT = this.pmcForm.value['chargeAmount'];
    console.log(this.postData);
    this.process.processPMC(this.postData).subscribe(
      responseData => {
        this.isPosting = false;
        console.log( responseData.RETURNSTATUS + ' ' + responseData.ERRORMESSAGE);
        Object.assign(this.result, responseData);
        this.onCancel();
      })
      
  }

  onCancel() {
    this.pmcForm.reset();
  }

}
