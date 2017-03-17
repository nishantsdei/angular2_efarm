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

  constructor(private router : Router,private _signupService: SignupService) { 
  }

  signup(){
    this._signupService.signup(this.user)
                           .subscribe(
                               comments => this.router.navigate(['/login']),
                                err => {
                                    console.log("error",err);
                                    this.router.navigate(['/login']);
                                });
  }

  ngOnInit() {
  }

}
