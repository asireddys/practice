import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {AuthserviceService} from '../authservice.service';
import{Router} from'@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerUserData = {};
  constructor( private _authService:AuthserviceService,private router:Router) { }
  updateName(){
    this._authService.registerUser(this.registerUserData).subscribe(res=>{
      console.log(res),
      err=>console.log(err),
     this.router.navigate(["food"]);
    }
  )
  }
  
  ngOnInit() {
  }

}
