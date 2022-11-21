import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-medium-course',
  templateUrl: './medium-course.component.html',
  styleUrls: ['./medium-course.component.css']
})
export class MediumCourseComponent implements OnInit {

  @Input() title?: string
  @Input() last_read?: string
  @Input() author?: string
  @Input() progress?: number
  @Input() steps?: number
  procent?: number

  constructor() {
  }

  ngOnInit(): void {
    this.procent = (this.progress!  / this.steps!) * 100
  }

}
