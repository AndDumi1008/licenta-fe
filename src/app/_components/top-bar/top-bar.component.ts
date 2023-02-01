import {Component, OnInit} from '@angular/core';
import {UserService} from "../../_services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public userService: UserService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    if(this.getUserState()) {
      this.userService.getUser(localStorage.getItem('uid')!).subscribe((user) => {
          if (user.uniqueId != null) {
            this.userService.refreshUserToken();
          }
        },
        () => {
          this._snackBar.open("Your session has expired. Please log in again!", "Close", {duration: 1000});
          this.userService.userLogout();
        });
    }
  }

  getUserState() {
    return this.userService.getLocalStorage('isLoggedin') == 'true';
  }

  logout() {
    this.userService.userLogout();
  }
}
