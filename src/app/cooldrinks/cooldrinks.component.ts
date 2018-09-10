import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooldrinks',
  templateUrl: './cooldrinks.component.html',
  styleUrls: ['./cooldrinks.component.css']
})
export class CooldrinksComponent implements OnInit {
  sweets=[
    {sweet1:"/assets/images/laddu.jpg"},
    {sweet2:"/assets/images/sonapapad.jpg"},
    {sweet1:"/assets/images/gulabjama.jpg"},
    {sweet1:"/assets/images/allsweets.jpg"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
