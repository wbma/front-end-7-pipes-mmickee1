import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {log} from 'util';

@Injectable()
export class MediaService {

  username: string;
  password: string;
  status: string;

  loginUrl = 'http://media.mw.metropolia.fi/wbma/login';
  apiUrl = 'http://media.mw.metropolia.fi/wbma/';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/media';

  constructor(private http: HttpClient, private router: Router) {
  }

  public login() {
    console.log('uname: ' + this.username);
    console.log('pwd: ' + this.password);
    const body = {
      username: this.username,
      password: this.password,
    };
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    this.http.post(this.loginUrl, body, settings).subscribe(response => {
      console.log(response['token']);
      localStorage.setItem('token', response['token']);
      this.router.navigate(['front']);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
      this.status = error.error.message;
    });
  }

  public getUserData() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token')),
    };
    return this.http.get(this.apiUrl + 'users/user', settings);
  }

  public register(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }

  public uploading(file) {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token')),
    };
    return this.http.post(this.mediaUrl, file, settings);
  }

  public getNewFiles() {
    return this.http.get(this.mediaUrl);
  }
}
