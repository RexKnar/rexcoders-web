import {Component,EventEmitter,Input,OnInit,Output,} from '@angular/core';

import { MentorsDetails } from '../../models/mentors.model';

@Component({
  selector: 'app-mentor-card',
  templateUrl: './mentor-card.component.html',
  styleUrls: ['./mentor-card.component.scss'],
})
export class MentorCardComponent implements OnInit {
  @Input() mentorsDetail: MentorsDetails;

  @Output() getMentor = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  getMentors(mentorDetail: any) {
    this.getMentor.emit(mentorDetail);
  }
}
