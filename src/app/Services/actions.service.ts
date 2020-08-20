import { Injectable } from '@angular/core';
import { actions } from '../Models/actions.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  actionListChange = new Subject<actions[]>();
  heading = new Subject<string>();

  constructor() { }

   private actionList: actions[] = [
    new actions(0,'PMC','Post Manual Charges','post_manual_charges'), 
    new actions(1,'ASI','Add Sundry Item','add_sundry_item'),
    new actions(2,'YCT','Debit Card Tracking','debit_card_tracking'),
    new actions(3,'ANC','Add New Customer','add_new_customer'),
    new actions(4,'OCA','Open Customer Account','open_customer_account'),
    new actions(5,'AB ','View Account Balance','view_account_balance'),
    new actions(6,'AE ','View Account Details','view_account_details'),
    new actions(7,'AS ','View Account Summary','view_account_summary'),
    new actions(8,'CAA','Add Customer Address','add_customer_address'),
    new actions(9,'ITA','View Account Details','inter_account_transfer')
  ];

  getActions() {
    return this.actionList.slice();
  }

  getLink(id) {
    return this.actionList[id].link;
  }

  performSearch(searchinput: string) {
      //this.actionListChange.next(this.actionList.filter(e => e.mnemonic === searchinput));
      this.actionListChange.next(this.actionList.filter(e => e.description.includes(searchinput)));
  }

  headingChange(heading: string) {
    this.heading.next(heading);
  }

  getHeading(key: number): string{
    const action =  this.actionList.find(e => e.key === key);
    return action.description;
  }
}
