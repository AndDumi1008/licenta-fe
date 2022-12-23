import {Component, OnInit} from '@angular/core';
import {ILaboratorySummary} from "../../_interfaces/ILaboratorySummary";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../_services/course.service";
import {LaboratoryService} from "../../_services/laboratory.service";

@Component({
  selector: 'app-sidenav-course-tree',
  templateUrl: './sidenav-course-tree.component.html',
  styleUrls: ['./sidenav-course-tree.component.css']
})
export class SidenavCourseTreeComponent implements OnInit {

  labs?: ILaboratorySummary[];
  id?: string;
  title?: string;

  constructor(private readonly laboratoryService: LaboratoryService,
              private readonly route: ActivatedRoute,
              private router: Router,
              private readonly courseService: CourseService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    console.log()

    this.laboratoryService.getLabSummary(this.id).subscribe(data => {
      this.labs = data;
    })
    this.getCourseName(this.id);
  }

  goToPage(id: string) {
    this.router.navigate([`coursePage/${this.id}/lab/${id}`]);
  }

  getCourseName(courseId?: string) {
    return this.courseService.getCourse(courseId).subscribe((data) => {
      this.title = data.title
    })
  }
}
