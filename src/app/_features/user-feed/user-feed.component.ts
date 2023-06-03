import {Component, OnInit} from '@angular/core';
import {ICourseSummary} from "../../_interfaces/ICourseSummary";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  courses: ICourseSummary[] =
    [{
      id: "create_new_course",
      title: "Create new course",
      author: "",
      img: "https://firebasestorage.googleapis.com/v0/b/codexam-a9bc6.appspot.com/o/course%2Fadd_course_img.jpg?alt=media&token=518a4bd2-df3d-4df5-97e9-e4422e27a74b"
    }];

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem('uid')!).subscribe((data) => {
      this.courses = this.courses.concat(data.courseArr);
    });
  }
}
