import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  isError?: boolean;
  hide: boolean = true;

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    uid: new FormControl(''),
    userRole: new FormControl('Student'),
  });



  constructor(private router: Router,
              private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.isError = false;
  }

  register() {
    if (this.registerForm.value.password === this.registerForm.value.confirmPassword) {
      if (this.userService.userRegister(this.registerForm)) {
        // this.userService.saveUser()
      }
    } else {
      this.isError = true;
    }
  }

  goLogin() {
    this.router.navigate([`/login`])
  }


}
