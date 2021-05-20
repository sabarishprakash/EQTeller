import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionsService } from 'src/app/Services/actions.service';

@Component({
  selector: 'app-anc',
  templateUrl: './anc.component.html',
  styleUrls: ['./anc.component.css']
})
export class AncComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service: ActionsService) { }

  ngOnInit(): void {
    console.log('ANC Loaded!');
    this.route.data.subscribe(data => {
    console.log(data);
    this.service.headingChange(data.heading);
  });
  }

}
