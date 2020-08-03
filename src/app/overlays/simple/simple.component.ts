import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,private simpleDialogRef: MatDialogRef<SimpleComponent>) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      filename: ''
    })
  }

  submit(form) {
    this.simpleDialogRef.close(`${form.value.filename}`);
  }

}
