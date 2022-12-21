import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-faq',
  templateUrl: './community-faq.component.html',
  styleUrls: ['./community-faq.component.scss']
})
export class CommunityFaqComponent implements OnInit {

  community:any=[
    {
question:"How To Learn Web Designing Step by Step",
answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
{
  question:"Learn Web Designing in Basic Level",
  answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
},
{
  question:"Learn Web Designing in Advance Level",
  answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
},
{
  question:"How To Become Succes in Designing & Development?",
  answer:""
}]

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
