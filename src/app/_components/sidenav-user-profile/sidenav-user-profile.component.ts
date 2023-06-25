import {Component, OnInit} from '@angular/core';
import {UserService} from "../../_services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav-user-profile',
  templateUrl: './sidenav-user-profile.component.html',
  styleUrls: ['./sidenav-user-profile.component.css']
})
export class SidenavUserProfileComponent implements OnInit {
  constructor(public userService: UserService, public router: Router) {
  }

  ngOnInit(): void {
    if (Object.keys(this.userService.userInfo).length === 0) {
      this.router.navigate(['/login'])
    }
  }

}
