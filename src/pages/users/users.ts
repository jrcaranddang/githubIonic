import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';
import { UserDetailsPage } from '../user-details/user-details';

/**
 * Generated class for the Users page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users: User[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe(users => {
      this.users = users;
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Users Page');
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }
}
