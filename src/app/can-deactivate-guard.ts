import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ActiveRouteGuard implements CanActivate {

  constructor(private router : Router) { }

  canActivate() {
    if(localStorage.getItem("user")) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}