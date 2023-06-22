import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../_services/user.service";

@Component({
  selector: 'app-compact-course',
  templateUrl: './compact-course.component.html',
  styleUrls: ['./compact-course.component.css']
})
export class CompactCourseComponent implements OnInit {

  @Input() title?: string
  @Input() uid?: string
  @Input() img?: string
  @Input() id?: string

  authorName?: string
  authorPhoto?: string

  constructor(private userService: UserService) {
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
      console.log("Add new course modal opened");
    }
    return null;
  }

}
