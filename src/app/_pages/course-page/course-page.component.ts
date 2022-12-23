import {Component, OnInit} from '@angular/core';
import {ICourseDetails} from "../../_interfaces/ICourseDetails";
import {CourseService} from "../../_services/course.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  course?: ICourseDetails;

  id?: string;

  constructor(private readonly courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.courseService.getCourse(this.id).subscribe((data) => {
      this.course = data;
    });
  }

  goToPage(labId: string) {
    this.router.navigate([`coursePage/${this.id}/lab/${labId}`]);
  }

}
