import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(user){
	  return this.http.post('http://localhost:3000/login',user)
                      .map((res:Response) => res.json())
	}
}
