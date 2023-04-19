import {Component, Input, OnInit} from '@angular/core';
import {ILaboratory} from "../../_interfaces/ILaboratory";
import {Judge0Service} from "../../_services/judge0.service";
import {environment} from "../../../environments/environment";
import {LaboratoryService} from "../../_services/laboratory.service";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  @Input() laboratory!: ILaboratory;
  languages = this.judge0.languages;
  language: string = ''


  codeMirrorOptions = environment.codeMirrorOptions;


  constructor(private judge0: Judge0Service,
              private laboratoryService: LaboratoryService) {
  }

  // TODO: change highlight based on selected language
  // ngOnChanges(): void {
  //   // this.codeMirrorOptions.mode = this.language
  // }

  ngOnInit() {

  }

  onSelected(value: any) {
    this.codeMirrorOptions.mode = value.language
    console.log(this.codeMirrorOptions.mode)
  }

  deleteLaboratory() {
    this.laboratoryService
  }

  saveEdit() {

  }
}
