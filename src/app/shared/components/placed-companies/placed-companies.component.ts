import { Component, OnInit } from '@angular/core';
import { PlacedCompanies } from '../../models/companies.model';


@Component({
  selector: 'app-placed-companies',
  templateUrl: './placed-companies.component.html',
  styleUrls: ['./placed-companies.component.scss'],
})
export class PlacedCompaniesComponent implements OnInit {
  companyList: PlacedCompanies[] = [
    {
      companyName: 'coursera',
      logoPath: 'assets/img/c1.png',
      companyUrl: '',
    },
    {
      companyName: 'upwork',
      logoPath: 'assets/img/c2.png',
      companyUrl: '',
    },
    {
      companyName: 'slack',
      logoPath: 'assets/img/c3.png',
      companyUrl: '',
    },
    {
      companyName: 'skillshare',
      logoPath: 'assets/img/c4.png',
      companyUrl: '',
    },
    {
      companyName: 'udemy',
      logoPath: 'assets/img/c5.png',
      companyUrl: '',
    },
    {
      companyName: 'unacademy',
      logoPath: 'assets/img/c6.png',
      companyUrl: '',
    },
    {
      companyName: 'udacity',
      logoPath: 'assets/img/c7.png',
      companyUrl: '',
    },
    {
      companyName: 'LearnUp',
      logoPath: 'assets/img/c8.png',
      companyUrl: '',
    },
    {
      companyName: 'Khan Academy',
      logoPath: 'assets/img/c9.png',
      companyUrl: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
