import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SignupService {

  constructor(private http: Http) { }
  someMethod() {
        return 'Hey!';
}

signup(user){
	  return this.http.post('http://localhost:3000/signup',user)
                      .map((res:Response) => res.json())
	}
}
