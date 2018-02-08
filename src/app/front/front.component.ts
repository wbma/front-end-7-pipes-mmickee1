import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MediaService} from '../services/media.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  constructor(public mediaService: MediaService, private router: Router) {
  }

  MediaFiles: any;

  ngOnInit() {
    this.mediaService.getUserData().subscribe(response => {
      console.log('Welcome ' + response['full_name']);
      this.displayImages();
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.router.navigate(['login']);
    });
  }

  displayImages() {
    this.mediaService.getNewFiles().subscribe(response => {
      console.log(response);
      this.MediaFiles = response;
      console.log(this.MediaFiles);
    });
  }
}
