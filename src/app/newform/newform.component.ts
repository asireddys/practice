import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {
  name = new FormControl('');
  age = new FormControl('');
  depo=new FormControl('');
  lname = new FormControl('');
  street = new FormControl('');
  city=new FormControl('');
  state = new FormControl('');
  zip = new FormControl('');
  price=new FormControl('');
  constructor() { }
  updateName() {
    this.name.setValue('');
    this.age.setValue('');
    this.depo.setValue('');
    this.lname.setValue('');
    this.street.setValue('');
    this.city.setValue('');
    this.state.setValue('');
    this.zip.setValue('');
    this.price.setValue('');
  }
  ngOnInit() {
  }

}
