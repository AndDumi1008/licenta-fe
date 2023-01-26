import {Component, OnInit} from '@angular/core';
import {UserService} from "../../_services/user.service";
import {FormControl, FormGroup} from "@angular/forms";

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


  constructor(public userService: UserService
  ) {}

  ngOnInit(): void {}

  login() {
    if (!this.userService.userLogin(this.loginForm.value.email!, this.loginForm.value.password!)) {
      this.isError = true;
    } else {
      this.isLogged = true;
    }
  }
}
