import { Component, OnInit } from '@angular/core';
import {ICourseSummary} from "../../_interfaces/ICourseSummary";
import {CourseService} from "../../_services/course.service";

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.component.html',
  styleUrls: ['./browse-page.component.css']
})
export class BrowsePageComponent implements OnInit {
  courses?: ICourseSummary[];


  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => this.courses = courses)
  }

}
