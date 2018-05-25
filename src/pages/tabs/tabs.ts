import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = 'InboxPage';
  tab2Root: string = 'ChannelsPage';
  tab3Root: string = 'ProfilePage';
  constructor() {
  }

}
