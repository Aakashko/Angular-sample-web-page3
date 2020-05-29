import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

let firebaseConfig = {
  apiKey: "AIzaSyAPfxVtBpIpaSzAgmmP2ijqm7R3KytMm-w",
  authDomain: "scribe-86e90.firebaseapp.com",
  databaseURL: "https://scribe-86e90.firebaseio.com",
  projectId: "scribe-86e90",
  storageBucket: "scribe-86e90.appspot.com",
  messagingSenderId: "609378669782",
  appId: "1:609378669782:web:7a4708a8202e63a3b6a577",
  measurementId: "G-6LPEV1V4Z7"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
