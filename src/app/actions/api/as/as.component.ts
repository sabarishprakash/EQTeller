import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionsService } from 'src/app/Services/actions.service';

@Component({
  selector: 'app-as',
  templateUrl: './as.component.html',
  styleUrls: ['./as.component.css']
})
export class AsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service: ActionsService) { }

  ngOnInit(): void {
    console.log('AS Loaded!');
    this.route.data.subscribe(data => {
    console.log(data);
    this.service.headingChange(data.heading);
  });
  }

}
