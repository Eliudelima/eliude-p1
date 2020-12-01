import { Injectable } from '@angular/core';

import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  authError: any;

  constructor(public firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
   }

}