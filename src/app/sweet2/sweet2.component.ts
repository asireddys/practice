import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sweet2',
  templateUrl: './sweet2.component.html',
  styleUrls: ['./sweet2.component.css']
})
export class Sweet2Component implements OnInit {
  sonapapad=[{
    name:"sonapapad",
    sweetname:"sonapapad",
    sonapapad:"/assets/images/sonapapad.jpg"
  }];
  constructor() { }

  ngOnInit() {
  }

}
