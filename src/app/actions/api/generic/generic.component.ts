import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from 'src/app/Models/generic.model';
import { FormGroup } from '@angular/forms';
import { GenericService } from '../../../Services/generic.service';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {

  form: FormGroup;
  payLoad = '';
  questions: QuestionBase<string>[] = [];

  constructor(private qcs: GenericService) { 
    this.questions = this.qcs.getQuestions();
   }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    this.qcs.question.subscribe(
      (questions: QuestionBase<string>[]) => {
        this.questions = questions;
      }
    )
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.qcs.getOnlineQuestions();
  }

}

