import {Component, OnInit} from '@angular/core';
import {ICourseSummary} from "../../_interfaces/ICourseSummary";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  courses?: ICourseSummary[];

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem('uid')!).subscribe((data) => {
      this.courses = data.courseArr;
    });
  }
}
