import { LoginResponse } from '../../models/login/login-response.interface';
import { Account } from '../../models/account/account.interface';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthProvider {

  constructor(public afAuth: AngularFireAuth) {

  }

  getAuthenticateduser() {
    return this.afAuth.authState;
  }

  async createUserWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse>{
        result: await this.afAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
      };
    } catch (e) {
      return <LoginResponse>{
        error: e
      };
    }
  }

  async signInWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse>{
        result: await this.afAuth.auth.signInWithEmailAndPassword(account.email, account.password)
      };
    } catch (e) {
      return <LoginResponse>{
        error: e
      };
    }
  }

}
