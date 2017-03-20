import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPasswordService } from './forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [ForgotPasswordService]
})
export class ForgotPasswordComponent implements OnInit {
  private email:any;	
  constructor(private router : Router,private forgotPasswordService: ForgotPasswordService) { }

  ngOnInit() {
  }

  forgotPassword() {
        this.forgotPasswordService.forgot(this.email)
                           .subscribe(
                               comments => this.router.navigate(['/login']),
                                err => {
                                    console.log("error",err);
                                    this.router.navigate(['/login']);
                                });
  }
}
