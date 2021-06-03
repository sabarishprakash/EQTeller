import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActionsService } from '../Services/actions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  timedOutCloser;
  actionHeading: string;
  icon = 'chevron_right';
 
  constructor(private actionService: ActionsService,
    private router: Router) { }

  ngOnInit(): void { 
    console.log(this.router.url);
  }

  inHome(): boolean {
    let Result = false;
    console.log(this.router.url.substr(9));
    if(this.router.url.substring(0, 8) === '/actions') {  
      Result = true;
    } else {
      Result = false;
    }
    
    return Result;
  }

  // getHeading(): string {
  //   return this.actionService.getHeading(+(this.router.url.substr(this.router.url.length - 1)));
  // }

  button_toggle() {
    this.icon = this.icon === 'chevron_right' ? 'chevron_left' : 'chevron_right';
  }

}
