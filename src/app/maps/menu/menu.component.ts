import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  `
  .cerrarSesion {
    font-size: 3mm;
    border: 1mm solid black;
    border-radius: 9mm;
    padding-inline: 5mm;
    backdrop-filter: blur(10px);
  }
  `
  ]
})
export class MenuComponent {

  constructor( private router:Router, private auth:AuthServiceService ){}

  logOut(){
    return this.auth.logOut()
    .then(resp=>{
      this.router.navigate(['/'])
    })
  }

}
