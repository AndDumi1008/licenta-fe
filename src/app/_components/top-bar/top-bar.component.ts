import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth,
              public userService: UserService) {
  }

  ngOnInit(): void {
    this.getUserState()
  }

  getUserState() {
    return localStorage.getItem('isLoggedin') == 'true';
  }

  logout() {
    this.userService.userLogout();
  }
}
