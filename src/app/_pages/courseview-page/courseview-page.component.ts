import {Component, OnInit} from '@angular/core';
import {ILaboratory} from "../../_interfaces/ILaboratory";
import {HighlightService} from "../../_services/highlight.service";
import {ActivatedRoute} from "@angular/router";
import {LaboratoryService} from "../../_services/laboratory.service";

@Component({
  selector: 'app-body-component',
  templateUrl: './courseview-page.component.html',
  styleUrls: ['./courseview-page.component.css']
})
export class CourseviewPageComponent implements OnInit {

  laboratory?: ILaboratory;
  labId?: string;
  isEditing: boolean = false;

  constructor(private readonly labService: LaboratoryService,
              private highlightService: HighlightService,
              private route: ActivatedRoute) {
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
    this.isEditing = newEditingState;
  }

}
