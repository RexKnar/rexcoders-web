import { Component, OnInit } from '@angular/core';
import { Testimonials } from '../../models/testimonials.model';

@Component({
  selector: 'app-testimonial-list',
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.scss']
})
export class TestimonialListComponent implements OnInit {
  testimonial:any;
  testimonialsList: Testimonials[] = [
    {
      profileImage: 'assets/img/rexcoders-student-1.jfif',
      companyLogo: 'assets/img/rexknar-logo.png',
      studentName: 'Joshi',
      currentDesignation: 'Web Developer',
      testimonial: ' Hi this is Joshi, with BSC Visual Communication background. I have a 10 years of non-IT work experience and then I decided to switch my career, so I started searching for a place to develop IT skills. Then I joined Rexcoders coding academy. Initially I started with lack of confidence, but from Rexcoders Team, I got a lot of inputs, like self-learning methodology, conducting technical activities through games helped me to learn things easily and sessions with the industrial experts every week which gradually improved my technical skill and self-confidence to be a good developer. Now I am a Software Developer at Rexknar Creative Solutions.A great thanks to REXCODERS Team.',
      rating: 4.9,
    },
    {
      profileImage: 'assets/img/rexcoders-student-2.jpg',
      companyLogo: 'assets/img/Infosys-logo.png',
      studentName: 'Aneesh S.P',
      currentDesignation: 'System Engineer',
      testimonial: 'As an Electrical engineering graduate, when I decided to change my career path as an IT professional because of my passion for it, I know how difficult it will be. However, I started doing my internship. at REXCODERS and they helped me to overcome my struggle and trained me to set my career as a web developer. Right now, I got placed at Infosys as Software Engineer. Thanks, Rexcoders team for your great support.',
      rating: 4.9,
    },
    {
      profileImage: 'assets/img/rexcoders-student-3.jpg',
      companyLogo: 'assets/img/fakeeh-logo.png',
      studentName: 'Jobin S',
      currentDesignation: 'Software Engineer',
      testimonial: 'I am a mechanical engineering student.After completing engineering,I was interested in becoming a Software Engineer.But I dont have any coding knowledge and never knew where to start.Then i joined REXCODERS, and from the scratch,they trained me to get all the knowledge of coding.One thing that impressed me about the academy is, they make as self-learns.Now i become a Software Trainee in a reputed Company.Thank you REXCODERS for making this happen and also, i thank the staffs of REXCODERS for their support in fixing my career.',
      rating: 4.9,
    },
    {
      profileImage: 'assets/img/rexcoders-student-8.jpg',
      companyLogo: 'assets/img/smart-tech-logo.png',
      studentName: 'Krishna Augustine.P',
      currentDesignation: 'Jr.Software Developer',
      testimonial:'After completing my bachelors degree, I was confused and had no idea what to do. I was stuck in home during the COVID period and was very depressed thinking of my future. But always wanted to become an IT professional, so I decided to move forward to reach my goal. Then I joined REXCODERS as an intern. I worked on real-time projects in ANGULAR and I improved my skill set. Now I can say I am a proud SOFTWARE DEVELOPER in QM Smart Technologies. Thank you REXCODERS for giving me guidance and support throughout my journey.',
      rating: 4.9,
    },
    {
      profileImage: 'assets/img/rexcoders-student-5.jpg',
      companyLogo: 'assets/img/rexknar-logo.png',
      studentName: 'Sheik Ali',
      currentDesignation: 'Web Developer',
      testimonial: 'Hi I am Sheik Ali, I am a graduate in Master of Engineering. I have a 12 years experience in teaching. I was looking out for the right place to build my skills in software developing to fulfill my long-standing desire to shift my career from education industry to IT industry. Finally I have found and joined Rexcoders Coding Academy. The way of training given in this academy was very unique. I got an excellent learning experience from Rexcoders coding academy. The best parts of trainings I admired and enjoyed in the academy are Individual care to each and every students, conducting weekly technical Games, weekend technical sessions handled by experts. Initially I thought it would be difficult for me to change careers after a long gap but after coming to Rexcoders Academy I lost that feeling completely. And now I am a Web Developer at Rexknar Creative Solutions.A very big thanks to Rexcoders Coding Academy Team.',
      rating: 4.9,
    },
    {
      profileImage: 'assets/img/rexcoders-student-6.jpg',
      companyLogo: 'assets/img/moonhiv-logo.jfif',
      studentName: 'Bejan Festus',
      currentDesignation: 'Jr.Software Developer',
      testimonial: '<p>With the dream of becoming a developer, stepped into REXCODERS as an intern. In addition to the training, they made me to work in live projects. The staffs in REXCODERS create a friendly environment and they were always there to clear my queries. It is the best place for students who were struggling to get knowledge about programming. They provide knowledge sharing as well as discussion sessions which is educative and also entertaining. Now am a front-end developer at Moonhive Private Limited.Thank You REXCODERS, am so grateful for your support.</p>',
      rating: 4.9,
    },


  ];


  constructor() { }

  ngOnInit(): void {
  }

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
  getTestimonial(TestimonialDetail:any){
    this.testimonial=TestimonialDetail;

}
}
