import { Subscription } from 'rxjs/Subscription';
import { AuthProvider } from '../../providers/auth/auth.service';
import { DataProvider } from '../../providers/data/data.service';
import { Profile } from '../../models/profile/profile.interface';
import { Component, OnDestroy } from '@angular/core';
import { User } from 'firebase/app';
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy {
  
  profile = {} as Profile;
  private authenticatedUser$: Subscription;
  private authetnicatedUser: User;
  
  constructor(private data: DataProvider, private auth: AuthProvider) {
    this.authenticatedUser$ = this.auth.getAuthenticateduser()
      .subscribe(user => this.authetnicatedUser = user);
  }

  async saveProfile() {
    if (this.authetnicatedUser) {
      this.profile.email = this.authetnicatedUser.email;
      const result = await this.data.saveProfile(this.authetnicatedUser, this.profile);
    }
  }

  ngOnDestroy() {
    this.authenticatedUser$.unsubscribe();
    
  }

}
