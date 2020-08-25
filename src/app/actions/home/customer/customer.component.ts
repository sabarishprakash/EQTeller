import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 

  constructor(private router: Router,
    private common: CommonService) { }

    heading = this.common.getMenuHeading();
    // heading = "Customer";

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/actions']);
  }
}
