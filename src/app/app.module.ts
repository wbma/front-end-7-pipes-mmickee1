import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {FrontComponent} from './front/front.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {FormsModule} from '@angular/forms';
import {MediaService} from './services/media.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { UploadComponent } from './upload/upload.component';
import { ThumbnailPipe } from './pipes/thumbnail.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    TopBarComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    UploadComponent,
    ThumbnailPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MediaService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
