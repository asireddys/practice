import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruits=[{
    item:"/assets/images/cherry.jpg"
  },
  {
    item:"/assets/images/orange.jpg"
  },
  {
    item:"/assets/images/watermelon.jpg"
  },
  {
    item:"/assets/images/allfruit.jpg"
  }
];

  constructor() { }

  ngOnInit() {
  }

}
