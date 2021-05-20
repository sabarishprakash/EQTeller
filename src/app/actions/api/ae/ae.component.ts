import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionsService } from 'src/app/Services/actions.service';

@Component({
  selector: 'app-ae',
  templateUrl: './ae.component.html',
  styleUrls: ['./ae.component.css']
})
export class AeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service: ActionsService) { }

  ngOnInit(): void {
    console.log('AE Loaded!');
    this.route.data.subscribe(data => {
    console.log(data);
    this.service.headingChange(data.heading);
  });
  }

}
