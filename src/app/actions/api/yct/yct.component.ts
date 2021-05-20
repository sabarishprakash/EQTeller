import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionsService } from 'src/app/Services/actions.service';

@Component({
  selector: 'app-yct',
  templateUrl: './yct.component.html',
  styleUrls: ['./yct.component.css']
})
export class YctComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service: ActionsService) { }

  ngOnInit(): void {
    console.log('YCT Loaded!');
    this.route.data.subscribe(data => {
      console.log(data);
      this.service.headingChange(data.heading);
    });
  }

}
