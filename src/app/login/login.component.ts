import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  private user = {}
  constructor(private router : Router,private loginService: LoginService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.login(this.user)
                           .subscribe(
                               comments => this.router.navigate(['/dashboard']),
                                err => {
                                    console.log("error",err);
                                    this.router.navigate(['/dashboard']);
                                });
  }

}
