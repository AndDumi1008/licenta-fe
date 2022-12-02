import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../../services/course.service";
import {ICourse} from "../../../../interfaces/ICourse";

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  courses?: ICourse[];

  constructor(private readonly courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    })
  }

}
