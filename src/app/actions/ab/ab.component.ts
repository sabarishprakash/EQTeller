import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbService } from '../../Services/ab.service';
import { ab } from 'src/app/Models/ab.model';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SimpleComponent } from '../../overlays/simple/simple.component';

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
  simpleDialogRef: MatDialogRef<SimpleComponent>;
  name: string;

  constructor(private process: AbService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.abForm = new FormGroup({
      'branch': new FormControl(null, [Validators.required,Validators.pattern('[0-9]{4}')]),
      'account': new FormControl(null, [Validators.required,Validators.pattern('[A-Z][0-9]{5}')]),
      'suffix': new FormControl(null, [Validators.required,Validators.pattern('[0-9]{3}')])})
  }

  openDialog() {
    this.simpleDialogRef = this.dialog.open(SimpleComponent);
    this.simpleDialogRef.afterClosed().subscribe(result => {
      this.name = result;
      console.log(this.name);
    });
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
        }, error => { 
            this._snackBar.open(error.status + " Unable to Fetch", "CLOSE", {
              duration: 3000,panelClass: ['blue-snackbar'],verticalPosition: 'bottom',horizontalPosition: 'end'
            });
            this.isPosting = false;
        }
      )
    }
  }
}
