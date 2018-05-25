import { AuthProvider } from '../../providers/auth/auth.service';
import { LoginResponse } from '../../models/login/login-response.interface';
import { Account } from '../../models/account/account.interface';
import { NavController } from 'ionic-angular';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthProvider, private navCtrl: NavController) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

  async login() {
      const result: LoginResponse =  await this.auth.signInWithEmailAndPassword(this.account);  
      this.loginStatus.emit(result);
  }

}
