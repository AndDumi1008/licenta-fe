import {Component, Input, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-sidenav-user-profile',
  templateUrl: './sidenav-user-profile.component.html',
  styleUrls: ['./sidenav-user-profile.component.css']
})
export class SidenavUserProfileComponent implements OnInit {
  @Input('isPanelVisible') isPanelVisible = false
  user?: any

  constructor(public afAuth: AngularFireAuth,
              public userService: UserService) {
  }

  ngOnInit(): void {
  }

}
