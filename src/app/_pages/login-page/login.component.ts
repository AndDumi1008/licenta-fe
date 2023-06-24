import {Component, OnInit} from '@angular/core';
import {UserService} from "../../_services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {CanActivate, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged?: boolean;
  isError?: boolean;
  hide: boolean = true;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {
    if(Object.keys(this.userService.userInfo).length>0) {
      this.router.navigate(['/profile/dashboard'])
    }
  }

  async login() {
    const isLoginSuccess = await this.userService.userLogin(this.loginForm.value.email!, this.loginForm.value.password!)
    if (isLoginSuccess ) {
      this.isLogged = true;
    } else {
      this.isError = true;
    }
  }
}
