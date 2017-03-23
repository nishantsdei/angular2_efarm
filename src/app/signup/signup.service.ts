import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SignupService {
  private host = "http://localhost";
  private port = 3000;
  constructor(private http: Http) { }
  someMethod() {
        return 'Hey!';
}

signup(user){
	  return this.http.post(this.host + ":" + this.port + '/api/register',user)
                      .map((res:Response) => res.json())
	}
}
