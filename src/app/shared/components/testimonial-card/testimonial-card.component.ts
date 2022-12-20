import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Testimonials } from '../../models/testimonials.model';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
})
export class TestimonialCardComponent implements OnInit {

  @Input() testimonialDetails: Testimonials;
  @Output() getTestimonial = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  getTestimonials(testimonialDetail: any) {
    this.getTestimonial.emit(testimonialDetail);
  }

}
