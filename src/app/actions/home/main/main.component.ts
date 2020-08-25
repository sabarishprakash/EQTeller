import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private common: CommonService,
    private router: Router) { }
  menus = this.common.menus;

  ngOnInit(): void {
  }
  showSubMenu(menuName: string) {
    this.router.navigate(['/actions/' + menuName]);
  }
}
