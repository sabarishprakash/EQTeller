import { Component, OnInit } from '@angular/core';
import { actions } from '../../Models/actions.model';
import { ActionsService } from '../../Services/actions.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private actionService: ActionsService) { }

  actionList: actions[];

  ngOnInit() {
    this.actionList = this.actionService.getActions();
    this.actionService.actionListChange.subscribe(
      (actionList: actions[]) => {
        this.actionList = actionList;
      }
    ) 
  }

  onSearch(event: Event) {
    this.actionService.performSearch((<HTMLInputElement>event.target).value);
  }
}
