import {Component, Input, OnInit} from '@angular/core';
import {ILaboratory} from "../../_interfaces/ILaboratory";
import {Judge0Service} from "../../_services/judge0.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  @Input() laboratory!: ILaboratory;
  languages = this.judge0.languages;
  codeMirrorOptions = environment.codeMirrorOptions;


  constructor(private judge0: Judge0Service) { }

  // TODO: change highlight based on selected language
  ngOnInit(): void {
  }

}
