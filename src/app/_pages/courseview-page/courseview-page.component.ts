import {Component, OnInit} from '@angular/core';
import {ILaboratory} from "../../_interfaces/ILaboratory";
import {HighlightService} from "../../_services/highlight.service";
import {ActivatedRoute} from "@angular/router";
import {LaboratoryService} from "../../_services/laboratory.service";
import {environment} from "../../../environments/environment";
import {Judge0Service} from "../../_services/judge0.service";

@Component({
  selector: 'app-body-component',
  templateUrl: './courseview-page.component.html',
  styleUrls: ['./courseview-page.component.css']
})
export class CourseviewPageComponent implements OnInit {

  laboratory?: ILaboratory;
  labId?: string;
  isEditing: boolean = false;
  codeMirrorOptions = environment.codeMirrorOptions;


  languages = this.judge0.languages;

  constructor(private readonly labService: LaboratoryService,
              private highlightService: HighlightService,
              private route: ActivatedRoute,
              private judge0: Judge0Service) {
    this.route.paramMap.subscribe(() => {
      this.ngOnInit()
    })
  }

  ngOnInit(): void {
    this.labId = this.route.snapshot.params['labId'];
    this.labService.getLab(this.labId).subscribe((data) => {
      this.laboratory = data
    });

    this.highlightService.highlightAll();
  }

  enterEdit(newEditingState: boolean) {
    this.isEditing =  newEditingState;
  }

}
