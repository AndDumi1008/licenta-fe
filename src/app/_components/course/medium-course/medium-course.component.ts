import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../_services/user.service";

@Component({
  selector: 'app-medium-course',
  templateUrl: './medium-course.component.html',
  styleUrls: ['./medium-course.component.css']
})
export class MediumCourseComponent implements OnInit {

  @Input() title?: string
  @Input() uid?: string
  @Input() id?: string
  @Input() img?: string
  authorName?: string;
  authorPhoto?: string;

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    // this.percent = (this.progress!  / this.steps!) * 100
    this.userService.getUser(this.uid!).subscribe((data) => {
      this.authorName = data.name;
      this.authorPhoto = data.photoURL;
    })
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}/${this.id}`]);
  }
}
