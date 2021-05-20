import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionsService } from 'src/app/Services/actions.service';

@Component({
  selector: 'app-oca',
  templateUrl: './oca.component.html',
  styleUrls: ['./oca.component.css']
})
export class OcaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service: ActionsService) { }

  ngOnInit(): void {
    console.log('OCA Loaded!');
    this.route.data.subscribe(data => {
      console.log(data);
      this.service.headingChange(data.heading);
    });
  }

}
