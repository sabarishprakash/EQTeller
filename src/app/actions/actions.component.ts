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
  icon = 'chevron_right';


  constructor(private actionService: ActionsService,
    private router: Router) { }

  ngOnInit(): void { 
    console.log(this.router.url);
  }

  inHome(): boolean {
    let Result = false;
    if(this.router.url.substring(0, 13) === '/actions/home') {
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

  button_toggle() {
    this.icon = this.icon === 'chevron_right' ? 'chevron_left' : 'chevron_right';
  }

}
