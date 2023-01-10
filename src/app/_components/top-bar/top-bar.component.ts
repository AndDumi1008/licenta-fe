import {Component, OnInit} from '@angular/core';
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.getUserState()
    this.userService.getUser(localStorage.getItem('uid')!).subscribe(() => {
      },
      () => {
        if (this.getUserState()) {
          this.userService.userLogout();
          this.userService.redirectTo("/")
        }
      });
  }

  getUserState() {
    return this.userService.getLocalStorage('isLoggedin') == 'true';
  }

  logout() {
    this.userService.userLogout();
  }
}
