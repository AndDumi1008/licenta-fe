import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-medium-course',
  templateUrl: './medium-course.component.html',
  styleUrls: ['./medium-course.component.css']
})
export class MediumCourseComponent implements OnInit {

  @Input() title?: string
  @Input() author?: string
  @Input() id?: string

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // this.percent = (this.progress!  / this.steps!) * 100
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}/${this.id}`]);
  }

}
