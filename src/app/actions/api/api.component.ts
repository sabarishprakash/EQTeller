import { Component, OnInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { ActionsService } from 'src/app/Services/actions.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements AfterContentChecked  {
  heading: any;

  constructor(private service: ActionsService,private cdref: ChangeDetectorRef) {  }

  ngAfterContentChecked(): void {
    this.service.heading.subscribe( data => this.heading = data);
    this.cdref.detectChanges();
  }

}
