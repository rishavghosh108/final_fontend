import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  email=""
  name=""

  otptoken: string = ''

  private url: String = "https://final-backend-ky0r.onrender.com"

  private checkmobileurl = this.url + "/system/mobile";
  private checkemailurl = this.url + "/system/email";
  private signupurl = this.url + "/system/signup";
  private otpverifyurl = this.url + "/system/otpverify";
  private loginurl = this.url + "/system/login"
  private profileurl = this.url + "/system/profile"
  private forgeturl=this.url+ "/system/forget"

  constructor(private http: HttpClient, private auth: AuthorizationService) { }

  Mobile(body: any): Observable<any> {
    return this.http.post<any>(this.checkmobileurl, body, { observe: 'response' });
  }

  Email(body: any): Observable<any> {
    return this.http.post<any>(this.checkemailurl, body, { observe: 'response' });
  }

  Signup(body: any): Observable<any> {
    return this.http.post<any>(this.signupurl, body, { observe: 'response' })
  }

  Verification(body: any, headers = new HttpHeaders({ "otpverify": this.otptoken })): Observable<any> {
    return this.http.post<any>(this.otpverifyurl, body, { headers, observe: 'response' })
  }

  Login(body: any): Observable<any> {
    return this.http.post<any>(this.loginurl, body, { observe: 'response' })
  }

  Profile(body: any = { "request": "profile" }, headers = new HttpHeaders({ "auth": this.auth.GetToken() })): Observable<any> {
    return this.http.post<any>(this.profileurl, body, { headers, observe: 'response' })
  }

  Forget(body: any): Observable<any> {
    return this.http.post<any>(this.forgeturl, body, { observe: 'response' })
  }
}
