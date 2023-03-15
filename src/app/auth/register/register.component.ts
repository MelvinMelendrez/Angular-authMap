import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email: string ='';
  password: string='';
  errorMessage:string=''
  name: String='';

  constructor( private auth:AuthServiceService, private router:Router,){};

  register() {
    if (!this.email || !this.password || !this.name) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid input',
        text: 'Please fill in all the fields',
      });
      return;
    }

    this.auth.registerEmail(this.email,this.password)
    .then(resp=>{
      this.router.navigate(['/maps'])
      })
    .catch(resp=>{
      console.log(resp)
      if(resp.code === 'auth/internal-error'){
        this.errorMessage = 'invalid Data'
      } else if(resp.code === 'auth/invalid-email'){
        this.errorMessage = 'Invalid email'
      } else if(resp.code === 'auth/weak-password'){
        this.errorMessage = 'Password should be at least 6 characters '
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
