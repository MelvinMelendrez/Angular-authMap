import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor( private router:Router, private logIn:AuthServiceService){};


  email:string='';
  password:string='';
  errorMessage:string='';


  login(){
    if (!this.email || !this.password) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid input',
        text: 'Please fill in all the fields',
      });
      return;
    }

    this.logIn.logEmail(this.email,this.password)
    .then(resp=>{
      this.router.navigate(['/maps'])
    })
    .catch(resp=>{
      console.log(resp);

      if(resp.code === 'auth/user-not-found'){
        this.errorMessage = 'Email not found'
      } else if(resp.code === 'auth/wrong-password'){
        this.errorMessage = 'Wrong password'
      } else {
        this.errorMessage = 'An error occurred during login'
      };

      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: this.errorMessage,
      })
    })
  }

}
