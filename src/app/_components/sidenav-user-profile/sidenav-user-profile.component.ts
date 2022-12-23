import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-sidenav-user-profile',
  templateUrl: './sidenav-user-profile.component.html',
  styleUrls: ['./sidenav-user-profile.component.css']
})
export class SidenavUserProfileComponent implements OnInit {

  user?: any

  constructor(public afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
  }

  logOut() {
    this.afAuth.signOut();
    localStorage.clear();
  }

  getLocalStorage(keyValue: string) {
    return localStorage.getItem(keyValue)
  }

}
