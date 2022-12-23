import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
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


  constructor(public afAuth: AngularFireAuth,
              private router: Router,
              private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.isError = false;
  }

  login() {
    if (this.userService.userLogin(this.loginForm.value.email!, this.loginForm.value.password!)) {
      this.isLogged = true;
    } else {
      this.isError = true;
    }

  }

  goRegister() {
    this.router.navigate([`/register`])
  }

}
