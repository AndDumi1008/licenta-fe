import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-compact-course',
  templateUrl: './compact-course.component.html',
  styleUrls: ['./compact-course.component.css']
})
export class CompactCourseComponent implements OnInit {

  @Input() title?: string
  @Input() author?: string
  constructor() { }

  ngOnInit(): void {
  }

}
