import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-cars',
  templateUrl: './listing-cars.component.html',
  styleUrls: ['./listing-cars.component.scss']
})
export class ListingCarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function() {
      $('.flip-btn').on( 'click', function() {
        $( this ).parent().toggleClass('flip-active');
      });
    
      $('.flip-btn-hide').on( 'click', function() {
        $(this).parents('.b-goods').removeClass('flip-active');
      });
    });
  }

}
