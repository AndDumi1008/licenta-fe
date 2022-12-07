import { Component, OnInit } from '@angular/core';
import {ILaboratorySummary} from "../../interfaces/ILaboratorySummary";
import {LabSummaryService} from "../../services/lab-summary.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-sidenav-course-tree',
  templateUrl: './sidenav-course-tree.component.html',
  styleUrls: ['./sidenav-course-tree.component.css']
})
export class SidenavCourseTreeComponent implements OnInit {

  labs?: ILaboratorySummary[];
  id?: string;
  title?: string;

  constructor(private readonly labSummaryService: LabSummaryService,
              private readonly route: ActivatedRoute,
              private router: Router,
              private readonly courseService: CourseService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.url[1].path

    this.labSummaryService.getLabSummary(this.id).subscribe(data => {
      this.labs = data;
      console.log(this.labs![0].id  )
    })

    this.getCourseName(this.id);

    console.log(this.id)
  }

  goToPage(id: string) {
    this.router.navigate([`coursePage/${this.id}/lab/${id}`]);
  }

  getCourseName(courseId?: string) {
    return this.courseService.getCourse(courseId).subscribe((data) =>
    {
      this.title = data.title
    })
  }

}
