import { Injectable } from '@angular/core';
import {ICourse} from "../interfaces/course-body";
import {mockCourses} from "../dummy-data/mock-course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  displayCourses() : ICourse[] {
    return mockCourses
  }
  constructor() { }
}
