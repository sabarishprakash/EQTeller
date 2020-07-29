import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../Services/actions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  actionHeading: string;

  constructor(private actionService: ActionsService,
    private router: Router) { }

  ngOnInit(): void { }

  inHome(): boolean {
    let Result = false;
    if(this.router.url === '/actions') {
      Result = true;
    } else {
      Result = false;
    }
    
    return Result;
  }

  getHeading(): string {
    let heading: string;
    return this.actionService.getHeading(+(this.router.url.substr(this.router.url.length - 1)));
  }

}
