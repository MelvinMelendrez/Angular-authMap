import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private auth:Auth ) { }

  registerEmail(email: string,password: string){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  logEmail(email: string,password: string){
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  logOut(){
    return signOut(this.auth)
  }

}
