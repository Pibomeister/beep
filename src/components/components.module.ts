import { LoginFormComponent } from './login-form/login-form.component';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AngularFireAuthModule } from "angularfire2/auth";
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';

@NgModule({
    declarations: [
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        AngularFireAuthModule
    ],
    exports: [
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent
    ],
    providers: [],
})
export class ComponentsModule { }