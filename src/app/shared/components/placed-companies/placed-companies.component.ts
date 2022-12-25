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
      logoPath: 'assets/img/rexknar-logo.png',
      companyUrl: '',
    },
    {
      companyName: 'upwork',
      logoPath: 'assets/img/Infosys-logo.png',
      companyUrl: '',
    },
    {
      companyName: 'slack',
      logoPath: 'assets/img/fakeeh-logo.png',
      companyUrl: '',
    },
    {
      companyName: 'skillshare',
      logoPath: 'assets/img/smart-tech-logo.png',
      companyUrl: '',
    },

  ];

  constructor() {}

  ngOnInit(): void {}
}
