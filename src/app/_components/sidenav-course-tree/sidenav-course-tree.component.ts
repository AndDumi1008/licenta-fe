import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ILaboratorySummary} from "../../_interfaces/ILaboratorySummary";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../_services/course.service";
import {LaboratoryService} from "../../_services/laboratory.service";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-sidenav-course-tree',
  templateUrl: './sidenav-course-tree.component.html',
  styleUrls: ['./sidenav-course-tree.component.css']
})
export class SidenavCourseTreeComponent implements OnInit {

  labs?: ILaboratorySummary[];
  id?: string;
  title?: string;
  @Output() emitterEdit = new EventEmitter<boolean>();
  @Input() isEditing?: boolean;

  constructor(private readonly laboratoryService: LaboratoryService,
              private readonly route: ActivatedRoute,
              public userService: UserService,
              private router: Router,
              private readonly courseService: CourseService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.laboratoryService.getLabList(this.id).subscribe((data) => {
      this.labs = data;
    });
    this.getCourseName(this.id);
  }

  getCourseName(courseId?: string) {
    return this.courseService.getCourse(courseId).subscribe((data) => {
      this.title = data.title
    })
  }

  changeEditingState() {
    // TODO: Check if user is author then show 'Enter edit mode'
    this.emitterEdit.emit(!this.isEditing);
  }
}
