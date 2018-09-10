import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sweet1',
  templateUrl: './sweet1.component.html',
  styleUrls: ['./sweet1.component.css']
})
export class Sweet1Component implements OnInit {
  laddu=[{
    
    name:'laddu',
    sweetname:'boondhi' ,
    burger:"/assets/images/burger.jpg"
  },
  {
    name:'l',
    sweetname:'b' 
  }
];
  constructor() { }

  ngOnInit() {
  
  }

}
