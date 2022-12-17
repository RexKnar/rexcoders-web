import { Component, OnInit } from '@angular/core';
import { MentorsDetails } from '../../models/mentors.model';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.scss']
})
export class MentorListComponent implements OnInit {
  details:any;
  mentor:any;


  mentorCardDetails : MentorsDetails[]  = [
    {
    imagePath : "assets/img/t-1.png",
    mentorName : "Susan D. Murphy",
    mentorDesignation : "Developer",
    companyLogo : "assets/img/c-1.png",
    companyName : "Ex-Facebook",
    loginId : 1,
   },
   {
    imagePath : "assets/img/t-2.png",
    mentorName : "Maxine E. Gagliardi",
    mentorDesignation : "Developer",
    companyLogo : "assets/img/c-2.png",
    companyName : "Ex-Facebook",
    loginId : 2,
   },
   {
    imagePath : "assets/img/t-3.png",
    mentorName : "Roy M. Cardona",
    mentorDesignation : "Developer",
    companyLogo : "assets/img/c-3.png",
    companyName : "Ex-Facebook",
    loginId : 3,
   },
   {
    imagePath : "assets/img/t-4.png",
    mentorName : "Rodney T. Doyon",
    mentorDesignation : "Developer",
    companyLogo : "assets/img/c-4.png",
    companyName : "Ex-Facebook",
    loginId : 4,
   },
   {
    imagePath : "assets/img/t-5.png",
    mentorName : "Dorothy K. Shipton",
    mentorDesignation : "Developer",
    companyLogo : "assets/img/c-5.png",
    companyName : "Ex-Facebook",
    loginId : 5,
   },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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

  getMentor(mentorDetail:any){
         this.mentor=mentorDetail;

  }


}
