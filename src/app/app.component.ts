import {Component, Input, OnInit} from '@angular/core';
import {UserProfileComponent} from "./_components/user-profile/user-profile.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Code-Exam';
  loggedIn = false;


}
