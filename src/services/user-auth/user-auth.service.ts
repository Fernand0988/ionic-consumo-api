import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  user$;
  constructor(
      private db: AngularFireDatabase,
      private afAuth: AngularFireAuth,
      private router: Router
  ) {
    this.user$ = afAuth.authState;
  }
  async googleLogin(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result => {
        resolve(result) ;
        this.router.navigateByUrl('/home');
      }).catch(error => console.log(error));
    });
  }
}
