import { Component, OnInit } from '@angular/core';
// import { Testimonials } from '../../models/testimonials.model';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonialsList: any = [
    {
      personImage: 'assets/img/user-1.jpg',
      companyLogo: 'assets/img/c-1.png',
      personName: 'Susan D. Murphy',
      designation: 'CEO, Leader',
      description: 'Faucibus tristique felis potenti ultrices ornare rhoncus',
      rating: 4.9,
    },
    {
      companyLogo: 'assets/img/c-2.png',
      personImage: 'assets/img/user-2.jpg',
      personName: 'Maxine E. Gagliardi',
      designation: 'Apple CEO',
      description: 'Faucibus tristique felis potenti ultrices ornare rhoncus',
      rating: 4.9,
    },
    {
      companyLogo: 'assets/img/c-3.png',
      personImage: 'assets/img/user-3.jpg',
      personName: 'Roy M. Cardona',
      designation: 'Google Founder',
      description: 'Faucibus tristique felis potenti ultrices ornare rhoncus',
      rating: 4.9,
    },
    {
      companyLogo: 'assets/img/c-4.png',
      personImage: 'assets/img/user-4.jpg',
      personName: 'Dorothy K. Shipton',
      designation: 'Linkedin Leader',
      description: 'Faucibus tristique felis potenti ultrices ornare rhoncus',
      rating: 4.9,
    },
    {
      companyLogo: 'assets/img/c-5.png',
      personImage: 'assets/img/user-5.jpg',
      personName: 'Robert P. McKissack',
      designation: 'CEO, Leader',
      description: 'Faucibus tristique felis potenti ultrices ornare rhoncus',
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
