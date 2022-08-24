import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-loader',
  templateUrl: './content-loader.component.html',
  styleUrls: ['./content-loader.component.scss']
})
export class ContentLoaderComponent implements OnInit {

  @Input() type:string;
  @Input() message :string;
  constructor() { }

  ngOnInit(): void {
  }

}
