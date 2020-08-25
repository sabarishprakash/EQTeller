import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../Models/generic.model';
import { of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenericService {
  questionsList: QuestionBase<string>[] = [
    new QuestionBase({key: 'branch',label: 'Branch',value: '0001',required: true,order: 1,controlType: 'textbox'}),
    new QuestionBase({key: 'account',label: 'Account',value: 'A00378',required: true,order: 1,controlType: 'textbox'}),
    new QuestionBase({key: 'suffix',label: 'Suffix',value: '011',required: true,order: 1,controlType: 'textbox'}),
    new QuestionBase({key: 'transactionCode',label: 'Transaction Code',value: '535',required: true,order: 1,controlType: 'textbox'}),
    new QuestionBase({key: 'currency',label: 'Currency',value: 'AOA',required: true,order: 1,controlType: 'textbox'}),
    new QuestionBase({key: 'amount',label: 'Amount',value: '0',required: true,order: 1,controlType: 'textbox'}),
    new QuestionBase({key: 'narratives',label: 'Narratives',value: 'Sample',required: true,order: 1,controlType: 'textbox'})
  ];

  question = new Subject<QuestionBase<string>[]>();

  constructor() { }
  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
       : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  getQuestions() {

    const questions: QuestionBase<string>[] = [

      // new QuestionBase({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   order: 3,
      //   controlType: 'dropdown',
      // }),
      new QuestionBase({key: 'branch',label: 'Branch',value: '0001',required: true,order: 1,controlType: 'textbox'}),
      new QuestionBase({key: 'account',label: 'Account',value: 'A00378',required: true,order: 1,controlType: 'textbox'}),
      new QuestionBase({key: 'suffix',label: 'Suffix',value: '011',required: true,order: 1,controlType: 'textbox'}),
      new QuestionBase({key: 'transactionCode',label: 'Transaction Code',value: '535',required: true,order: 1,controlType: 'textbox'}),
      new QuestionBase({key: 'currency',label: 'Currency',value: 'AOA',required: true,order: 1,controlType: 'textbox'}),
      new QuestionBase({key: 'amount',label: 'Amount',value: '0',required: true,order: 1,controlType: 'textbox'}),
      new QuestionBase({key: 'narratives',label: 'Narratives',value: 'Sample',required: true,order: 1,controlType: 'textbox'})
    ];

    //return of(questions.sort((a, b) => a.order - b.order));
    return questions.sort((a, b) => a.order - b.order);
  }
  getOnlineQuestions() {
    this.questionsList.pop();
    this.question.next(this.questionsList);
  }

}