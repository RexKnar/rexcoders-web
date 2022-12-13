import { Component, OnInit } from '@angular/core';
import { Testimonials } from '../../models/testimonials.model';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonialsList: Testimonials[] = [
    {
      profileImage: 'assets/img/user-1.jpg',
      companyLogo: 'assets/img/c-1.png',
      studentName: 'Susan D. Murphy',
      currentDesignation: 'CEO, Leader',
      testimonial: 'Faucibus tristique felis potenti ultrices ornare rhoncus',
      rating: 4.9,
    },
    {
      profileImage: 'assets/img/user-2.jpg',
      companyLogo: 'assets/img/c-2.png',
      studentName: 'Maxine E. Gagliardi',
      currentDesignation: 'Apple CEO',
      testimonial: 'Faucibus tristique felis potenti ultrices ornare rhoncus',
      rating: 4.9,
    },
    {
      profileImage: 'assets/img/user-3.jpg',
      companyLogo: 'assets/img/c-3.png',
      studentName: 'Roy M. Cardona',
      currentDesignation: 'Google Founder',
      testimonial: 'Faucibus tristique felis potenti ultrices ornare rhoncus',
      rating: 4.9,
    },
    {
      profileImage: 'assets/img/user-4.jpg',
      companyLogo: 'assets/img/c-4.png',
      studentName: 'Dorothy K. Shipton',
      currentDesignation: 'Linkedin Leader',
      testimonial: 'Faucibus tristique felis potenti ultrices ornare rhoncus',
      rating: 4.9,
    },
    {
      profileImage: 'assets/img/user-5.jpg',
      companyLogo: 'assets/img/c-5.png',
      studentName: 'Robert P. McKissack',
      currentDesignation: 'CEO, Leader',
      testimonial: 'Faucibus tristique felis potenti ultrices ornare rhoncus',
      rating: 4.9,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
}
