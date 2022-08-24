import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss']
})
export class TrainingCardComponent implements OnInit {

  @Input() cardData:any;
  environment=environment;

  constructor() { }

  ngOnInit(): void {
  }

}
