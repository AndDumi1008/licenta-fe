import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../_services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateCoursePageComponent} from "../../../_pages/create-course-page/create-course-page.component";

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

  constructor(private userService: UserService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    if(!this.uid) return
    this.userService.getUser(this.uid!).subscribe((data) => {
      // console.log({data})
      this.authorName = data.name;
      this.authorPhoto = data.photoURL;
    })
  }

  redirectTo(id: any) {
    this.userService.redirectTo('/coursePage/' + id);
  }

  addCourse() {
    if(this.id === 'create_new_course') {
      this.dialog.open(CreateCoursePageComponent);
    }
    return null;
  }

}
