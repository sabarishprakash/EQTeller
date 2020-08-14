import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  menus = this.common.menus;

  constructor(private router: Router,
    private common: CommonService) { }

  ngOnInit(): void {
  }

  inHome() {
    return this.common.inHome();
  }

  showCustomer(menuName: string) {
    this.router.navigate(['/actions/home/' + menuName]);
  }

}
