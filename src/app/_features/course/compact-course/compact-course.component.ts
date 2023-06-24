import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../_services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateCoursePageComponent} from "../../../_pages/create-course-page/create-course-page.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-compact-course',
  templateUrl: './compact-course.component.html',
  styleUrls: ['./compact-course.component.css']
})
export class CompactCourseComponent implements OnInit {

  @Input() title?: string | null | undefined
  @Input() uid?: string | null | undefined
  @Input() img?: string | null | undefined
  @Input() id?: string | null | undefined

  authorName?: string
  authorPhoto?: string

  constructor(private userService: UserService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    if(!this.uid) return
    this.userService.getUser(this.uid!).subscribe((data) => {
      this.authorName = data.name;
      this.authorPhoto = data.photoURL;
    })
  }

  redirectTo(id: any) {
    if(this.router.url.split("/")[1] == "browse") this.userService.addCourseToUser(this.id!).subscribe()
    this.userService.redirectTo('/coursePage/' + id);
  }

  addCourse() {
    if(this.id === 'create_new_course') {
      this.dialog.open(CreateCoursePageComponent);
    } else {
      this.redirectTo(this.id)
    }
  }

}
