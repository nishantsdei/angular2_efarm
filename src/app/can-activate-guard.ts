import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginRouteGuard implements CanActivate {

  constructor(private router : Router) {
    console.log("In login-route-guard file");
  }

  canActivate() {
    if(localStorage.getItem("user")) return false;
    return true;
  }
}