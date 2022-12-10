import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../_services/course.service";
import {ICourseSummary} from "../../../_interfaces/ICourseSummary";

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  courses?: ICourseSummary[];

  constructor(private readonly courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    })
  }

}
