import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionsService } from 'src/app/Services/actions.service';

@Component({
  selector: 'app-ita',
  templateUrl: './ita.component.html',
  styleUrls: ['./ita.component.css']
})
export class ItaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service: ActionsService) { }

  ngOnInit(): void {
    console.log('ITA Loaded!');
    this.route.data.subscribe(data => {
      console.log(data);
      this.service.headingChange(data.heading);
    });
  }

}
