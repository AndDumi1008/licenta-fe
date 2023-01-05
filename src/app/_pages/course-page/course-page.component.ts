import {Component, OnInit} from '@angular/core';
import {ICourseDetails} from "../../_interfaces/ICourseDetails";
import {CourseService} from "../../_services/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LaboratoryService} from "../../_services/laboratory.service";
import {ILaboratorySummary} from "../../_interfaces/ILaboratorySummary";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  course?: ICourseDetails;

  labs?: ILaboratorySummary[];

  id?: string;
  author?: string;

  constructor(private readonly courseService: CourseService,
              private readonly labService: LaboratoryService,
              private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.courseService.getCourse(this.id).subscribe(course => {
      this.course = course
      this.userService.getUser(course.author).subscribe(user => this.author = user.name);
    });

    this.labService.getLabList(this.id).subscribe(data => this.labs = data);

  }

  goToPage(labId: string) {
    this.router.navigate([`coursePage/${this.id}/lab/${labId}`]);
  }

}
