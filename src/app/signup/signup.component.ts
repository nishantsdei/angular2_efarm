import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
// import 'rxjs/add/operator/map';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent implements OnInit {
  private user = {};
  private  comments;
  private errMessage = {};

  constructor(private router : Router,private _signupService: SignupService) { 
  }

  signup(){
    this.errMessage = {};
    this._signupService.signup(this.user)
                           .subscribe(
                                res => {
                                 this.router.navigate(['/login']);
                                },err => {
                                    this.errMessage = JSON.parse(err._body);
                                });
  }

  ngOnInit() {
  }

}
