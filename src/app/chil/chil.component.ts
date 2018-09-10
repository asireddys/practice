import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-chil',
  templateUrl: './chil.component.html',
  styleUrls: ['./chil.component.css']
})
export class ChilComponent implements OnInit {
@Input() ChildMessage;
  constructor() { }

  ngOnInit() {
  }

}
