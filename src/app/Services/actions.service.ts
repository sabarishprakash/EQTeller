import { Injectable } from '@angular/core';
import { actions } from '../Models/actions.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  actionListChange = new Subject<actions[]>();

  constructor() { }

  private actionList: actions[] = [
    new actions(1,'PMC','Post Manual Charges'), 
    new actions(2,'ASI','Add Sundry Item'),
    new actions(3,'YCT','Debit Card Tracking'),
    new actions(4,'ANC','Add New Customer'),
    new actions(5,'OCA','Open Customer Account'),
  ];

  getActions() {
    return this.actionList.slice();
  }

  performSearch(searchinput: string) {
      //this.actionListChange.next(this.actionList.filter(e => e.mnemonic === searchinput));
      this.actionListChange.next(this.actionList.filter(e => e.description.includes(searchinput)));
  }
}
