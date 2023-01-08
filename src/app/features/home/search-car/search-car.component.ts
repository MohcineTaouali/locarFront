import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  citys: any[] = [
    {value: 'Casablanca', viewValue: 'Steak'},
    {value: 'rabat', viewValue: 'Pizza'},
    {value: 'Fes', viewValue: 'Tacos'},
  ];

}
