import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentoutput',
  templateUrl: './parentoutput.component.html',
  styleUrls: ['./parentoutput.component.css']
})
export class ParentoutputComponent implements OnInit {

  constructor() { }
  message;
  
    // receiveMessage($event) {
    //   this.message = $event
    // }

  ngOnInit() {
  }

}
