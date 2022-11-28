import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private authService: SocialAuthService) {
  }

  user?: SocialUser;
  @Input() loggedIn = false;
  @Output() toogle = new EventEmitter();

  ngOnInit(): void {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.toogle.emit(this.loggedIn);
    });
  }

}
