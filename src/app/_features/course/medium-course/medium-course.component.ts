import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../_services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-medium-course',
  templateUrl: './medium-course.component.html',
  styleUrls: ['./medium-course.component.css']
})
export class MediumCourseComponent implements OnInit {

  @Input() title?:  string | null | undefined
  @Input() uid?:  string | null | undefined
  @Input() id?:  string | null | undefined
  @Input() img?:  string | null | undefined
  authorName?: string;
  authorPhoto?: string;

  constructor(public userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    // this.percent = (this.progress!  / this.steps!) * 100
    this.userService.getUser(this.uid!).subscribe((data) => {
      this.authorName = data.name;
      this.authorPhoto = data.photoURL;
    })
  }

  redirectTo(id: any) {
    if(this.router.url.split("/")[1] == "browse") this.userService.addCourseToUser(this.id!).subscribe()
    this.userService.redirectTo('/coursePage/' + id);
  }
}
