import {Component, OnInit} from '@angular/core';
import {ILaboratory} from "../../_interfaces/ILaboratory";
import {HighlightService} from "../../_services/highlight.service";
import {ActivatedRoute} from "@angular/router";
import {LaboratoryService} from "../../_services/laboratory.service";

@Component({
  selector: 'app-learning-body',
  templateUrl: './learning-body.component.html',
  styleUrls: ['./learning-body.component.css']
})
export class LearningBodyComponent implements OnInit {


  laboratory?: ILaboratory;

  labId?: string | null;

  constructor(private readonly labService: LaboratoryService,
              private highlightService: HighlightService,
              private route: ActivatedRoute) {
    this.route.children[1]?.paramMap.subscribe(() => {
      this.ngOnInit()
    })
  }

  ngOnInit(): void {
    this.labId = this.route.children[1]?.snapshot.paramMap.get('labId')

    if (this.labId != null) {
      this.labService.getLab(this.labId).subscribe((data) => {
        this.laboratory = data
      });
    }
    this.highlightService.highlightAll();
  }

}
