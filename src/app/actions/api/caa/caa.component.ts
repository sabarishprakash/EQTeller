import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionsService } from 'src/app/Services/actions.service';

@Component({
  selector: 'app-caa',
  templateUrl: './caa.component.html',
  styleUrls: ['./caa.component.css']
})
export class CaaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service: ActionsService) { }

  ngOnInit(): void {
    console.log('CAA Loaded!');
    this.route.data.subscribe(data => {
      console.log(data);
      this.service.headingChange(data.heading);
    });
  }

}
