import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ILaboratorySummary} from "../../_interfaces/ILaboratorySummary";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../_services/course.service";
import {LaboratoryService} from "../../_services/laboratory.service";
import {UserService} from "../../_services/user.service";
import {Subscription} from "rxjs";
import {ContentService} from "../../_services/content.service";

@Component({
  selector: 'app-sidenav-course-tree',
  templateUrl: './sidenav-course-tree.component.html',
  styleUrls: ['./sidenav-course-tree.component.css']
})
export class SidenavCourseTreeComponent implements OnInit, OnDestroy {

  labs?: ILaboratorySummary[];
  id?: string;
  title?: string;
  courseAuthor: string = "";
  @Output() emitterEdit = new EventEmitter<boolean>();
  @Input() isEditing?: boolean;
  extractedContent: string[] = [];
  private extractedContentSubscription: Subscription | undefined;

  constructor(private readonly laboratoryService: LaboratoryService,
              private readonly route: ActivatedRoute,
              public userService: UserService,
              private router: Router,
              private readonly courseService: CourseService,
              private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.laboratoryService.getLabList(this.id)
    this.laboratoryService.labsSubject.subscribe(data => this.labs = data)
    this.getCourseName(this.id);
  }

  ngOnDestroy() {
    if (this.extractedContentSubscription)
      this.extractedContentSubscription.unsubscribe();
  }

  getCourseName(courseId?: string) {
    return this.courseService.getCourse(courseId).subscribe((data) => {
      this.title = data.title;
      this.userService.getUser(data.author).subscribe(data => this.courseAuthor = data.name);
    })
  }

  changeEditingState() {
    // TODO: Check if user is author then show 'Enter edit mode'
    this.emitterEdit.emit(!this.isEditing);
  }

  checkAuthor() {
    return localStorage.getItem("name") == this.courseAuthor;
  }

  onContentChange(lab: ILaboratorySummary, i: number) {
    this.extractedContentSubscription = this.contentService.getExtractedContentObservable(lab.id).subscribe(content => {
      this.extractedContent[i] = content;
    });

    this.userService.redirectTo('coursePage/' + this.id + '/lab/' + lab.id);
  }

  addLab() {
    this.userService.redirectTo(`coursePage/${this.id}/lab/new` )
  }
}
