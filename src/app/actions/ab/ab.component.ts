import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbService } from '../../Services/ab.service';
import { ab } from 'src/app/Models/ab.model';
@Component({
  selector: 'app-ab',
  templateUrl: './ab.component.html',
  styleUrls: ['./ab.component.css']
})
export class AbComponent implements OnInit {
  abForm: FormGroup;
  postData: ab;
  isPosting: boolean;
  abData: any;
  success = false;

  constructor(private process: AbService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.abForm = new FormGroup({
      'branch': new FormControl(null, Validators.required),
      'account': new FormControl(null, Validators.required),
      'suffix': new FormControl(null, Validators.required)})
  }

  getDetails() {
    const account = this.abForm.value['branch'] + this.abForm.value['account'] + this.abForm.value['suffix'];
    if (account.length === 13) {
      this.isPosting = true;
      this.postData = new ab(
        this.abForm.value['branch'],
        this.abForm.value['account'].toUpperCase(),
        this.abForm.value['suffix']
      )
      console.log(this.postData);
      this.process.processAB(this.postData).subscribe(
        responseData => {
          this.isPosting = false;
          this.abData = this.process.getData(responseData.OUTPUT);
          this.success = true;
        }
      )
    }
  }
}
