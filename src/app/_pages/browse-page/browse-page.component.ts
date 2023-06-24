import { Component, OnInit } from '@angular/core';
import {ICourseSummary} from "../../_interfaces/ICourseSummary";
import {CourseService} from "../../_services/course.service";
import {UserService} from "../../_services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.component.html',
  styleUrls: ['./browse-page.component.css']
})
export class BrowsePageComponent implements OnInit {
  courses?: ICourseSummary[];


  constructor(private courseService: CourseService, public userService: UserService, public router: Router) { }

  ngOnInit(): void {
    if(Object.keys(this.userService.userInfo).length === 0) {
      this.router.navigate(['/login'])
    }else {
      this.courseService.getCourses().subscribe((courses) => this.courses = courses)
    }
  }

}
