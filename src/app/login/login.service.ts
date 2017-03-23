import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class LoginService {
  private host = "http://localhost";
  private port = 3000;

  constructor(private http: Http) { }

  login(user){
	  return this.http.post(this.host + ":" + this.port + '/api/login',user)
                      .map((res:Response) => res.json())
	}
}
