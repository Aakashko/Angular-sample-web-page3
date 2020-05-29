import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  userError: any;

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required]]
    },
    {
      validator: this.checkIfMatch("password","confirmPassword")
    })
   }

   checkIfMatch(passwordKey: string, confirmPasswordKey: string)
   {
     return (group: FormGroup) => {
       let password =group.controls[passwordKey];
       let confirmPassword =group.controls[confirmPasswordKey];

       if(password.value == confirmPassword.value){
         return;
       }
       else {
         confirmPassword.setErrors({
           notEqualToPassword: true
         })
       }
     }
   }

  onSub(signupF){
    let email: string = signupF.value.email;
    let password: string = signupF.value.password;
    let firstName: string = signupF.value.firstName;
    let lastName: string = signupF.value.lastName;

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((response)=> {
      console.log(response);

      let randomNumber = Math.floor(Math.random() * 1000)

      response.user.updateProfile({
        displayName: firstName + " " + lastName,
        photoURL: "https://api.adorable.io/avatars/" + randomNumber
      }).then(() => {
        this.message = "You have successfully signed up. Please login."
      })
    }).catch((error) => {
      console.log(error);
      this.userError = error;
    })
  }

  ngOnInit(): void {
  }

}
