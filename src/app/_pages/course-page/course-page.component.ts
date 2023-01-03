import {Component, OnInit} from '@angular/core';
import {ICourseDetails} from "../../_interfaces/ICourseDetails";
import {CourseService} from "../../_services/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LaboratoryService} from "../../_services/laboratory.service";
import {ILaboratorySummary} from "../../_interfaces/ILaboratorySummary";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  course?: ICourseDetails;

  labs?: ILaboratorySummary[];

  id?: string;

  constructor(private readonly courseService: CourseService,
              private readonly labService: LaboratoryService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.courseService.getCourse(this.id).subscribe((data) => {
      this.course = data;
    });

    this.labService.getLabList(this.id).subscribe((data) => {
      this.labs = data;
    });
  }

  goToPage(labId: string) {
    this.router.navigate([`coursePage/${this.id}/lab/${labId}`]);
  }

}
