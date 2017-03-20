import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class ForgotPasswordService {

  constructor(private http: Http) { }
  
  forgot(data) {
  	return this.http.post('http://localhost:3000/forgotPassword',data)
                      .map((res:Response) => res.json())
  }

}
