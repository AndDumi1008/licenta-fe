import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.getUserState()
  }

  getUserState() {
    return localStorage.getItem('isLoggedin') == 'true';
  }

  logout() {
    this.afAuth.signOut();
    localStorage.clear();
  }
}
