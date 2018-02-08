import {Component, OnInit} from '@angular/core';
import {User} from '../interfaces/user';
import {MediaService} from '../services/media.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {register} from 'ts-node';
import {getResponseURL} from '@angular/http/src/http_utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
    email: '',
  };

  constructor(private mediaService: MediaService, private http: HttpClient, private router: Router) {
  }

  public register() {
    console.log(this.user);
    this.mediaService.register(this.user).subscribe(response => {
        console.log(response);
      this.mediaService.username = this.user.username;
      this.mediaService.password = this.user.password;
      this.mediaService.login();
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    });
  }


  ngOnInit() {
  }

}
