import {Component, Input, OnInit} from '@angular/core';
import {ILaboratory} from "../../_interfaces/ILaboratory";
import {Judge0Service} from "../../_services/judge0.service";
import {environment} from "../../../environments/environment";
import {LaboratoryService} from "../../_services/laboratory.service";
import {ContentService} from "../../_services/content.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  @Input() laboratory!: ILaboratory;
  languages = this.judge0.languages;
  language: string = ''
  labPriority: number | null = null;


  codeMirrorOptions = environment.codeMirrorOptions;

  codeMirrorOptions2: any = {
    mode: null,
    // readOnly: "nocursor",
    gutters: false
  }

  constructor(private judge0: Judge0Service,
              private laboratoryService: LaboratoryService,
              private router: Router,
              private contentService: ContentService) {
  }

  // TODO: change highlight based on selected language
  // ngOnChanges(): void {
  //   // this.codeMirrorOptions.mode = this.language
  // }

  extractedContent: string = '';

  ngOnInit() {
  }

  onContentChange() {
    this.extractedContent = this.extractContentFromHTML(this.laboratory.content);
    this.contentService.updateExtractedContent(this.extractedContent, this.laboratory.id!);
  }

  extractContentFromHTML(htmlString: string): string {
    const regex = /<h1>(.*?)<\/h1>/;
    const match = regex.exec(htmlString);
    return match ? match[1] : '';
  }


  onSelected(value: any) {
    this.codeMirrorOptions.mode = value.language
    // console.log(this.codeMirrorOptions.mode)
    this.language = this.codeMirrorOptions.mode
  }

  deleteLab() {
    this.laboratoryService
  }

  saveLab() {

    if (this.laboratory.id === "new") {
      // console.log(this.router.url.split("/")[2])
      this.laboratoryService.putLaboratory({
        id: null,
        title: this.laboratory.title,
        content: this.laboratory.content,
        exercise: this.laboratory.exercise,
        codeInput: this.laboratory.codeInput,
        codeOutput: this.laboratory.codeOutput,
        codeLanguage: this.language,
        course: this.router.url.split("/")[2],
        priority: this.labPriority!
      }).subscribe()
    } else if (this.laboratory.id != null) {
      this.laboratoryService.putLaboratory({
        id: this.laboratory.id,
        title: this.laboratory.title,
        content: this.laboratory.content,
        exercise: this.laboratory.exercise,
        codeInput: this.laboratory.codeInput,
        codeOutput: this.laboratory.codeOutput,
        codeLanguage: this.language,
        course: this.router.url.split("/")[2],
        priority: this.labPriority!
      }).subscribe()
    }
  }
}
