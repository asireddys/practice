import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childoutput',
  templateUrl: './childoutput.component.html',
  styleUrls: ['./childoutput.component.css']
})
export class ChildoutputComponent implements OnInit {
  message="hello we are very good";
 @Output() messageEvent=new EventEmitter();
  constructor() { }
  sendMessage() {
    this.messageEvent.emit(this.message)
  }
  ngOnInit() {
  }

}
