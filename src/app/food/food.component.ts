import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
price="$10";
fare;

food=[
  {
  burger:"/assets/images/burger.jpg",price:"$10",
  },
  {
    burger:"/assets/images/pizza.jpg"},
    {
  burger:"/assets/images/dish.jpg"},
  {
  burger:"/assets/images/vegs.jpg"}];
  showtheprice(){
    this.fare =this.price;
  }

  constructor() { }

  ngOnInit() {
  }

}
