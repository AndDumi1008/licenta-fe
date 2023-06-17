import { Component, OnInit } from '@angular/core';
import {ILaboratory} from "../../_interfaces/ILaboratory";

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.css']
})
export class CreateCoursePageComponent implements OnInit {
  laboratory?: ILaboratory;
  constructor() { }

  ngOnInit(): void {
    this.laboratory = {
      id: 'create_new_course',
      title: '',
      content: '',
      exercise: '',
      codeInput: '',
      codeOutput: '',
      codeLanguage: '',
    }
  }

}
