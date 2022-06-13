import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.scss']
})
export class TrainingListComponent implements OnInit {

  constructor() { }

  trainingDatas:any=[{
    trainingTitle:'Fullstack Web development',
    domain:'Software',
    category:'Programing',
    subcategory:'Web Development',
    stack:'MEAN',
    amount:'60000',
    discountAmount:'34999',
    imageUrl:'',
    language:'Tamil/English',
    medium:'Offline',
    learnersLevel:'Beginers - Intermediate'

  },
  {
    trainingTitle:'Fullstack Web development',
    domain:'Software',
    category:'Programing',
    subcategory:'Web Development',
    stack:'MEAN',
    amount:'60000',
    discountAmount:'34999',
    imageUrl:'',
    language:'Tamil/English',
    medium:'Offline',
    learnersLevel:'Beginers - Intermediate'

  },
  {
    trainingTitle:'Fullstack Web development',
    domain:'Software',
    category:'Programing',
    subcategory:'Web Development',
    stack:'MEAN',
    amount:'60000',
    discountAmount:'34999',
    imageUrl:'',
    language:'Tamil/English',
    medium:'Offline',
    learnersLevel:'Beginers - Intermediate'

  },
  {
    trainingTitle:'Fullstack Web development',
    domain:'Software',
    category:'Programing',
    subcategory:'Web Development',
    stack:'MEAN',
    amount:'60000',
    discountAmount:'34999',
    imageUrl:'',
    language:'Tamil/English',
    medium:'Offline',
    learnersLevel:'Beginers - Intermediate'

  },
  {
    trainingTitle:'Fullstack Web development',
    domain:'Software',
    category:'Programing',
    subcategory:'Web Development',
    stack:'MEAN',
    amount:'60000',
    discountAmount:'34999',
    imageUrl:'',
    language:'Tamil/English',
    medium:'Offline',
    learnersLevel:'Beginers - Intermediate'

  }];

  ngOnInit(): void {
  }

}
