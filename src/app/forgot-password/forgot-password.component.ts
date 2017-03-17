import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  private user = {};	
  constructor(private router : Router) { }

  ngOnInit() {
  }

  forgotPassword() {
  	this.router.navigate(['/login']);
  }
}
