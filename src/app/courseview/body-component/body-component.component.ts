import {Component, OnInit} from '@angular/core';
import {ILaboratory} from "../../interfaces/ILaboratory";
import {LabDetailsService} from "../../services/lab-details.service";
import {HighlightService} from "../../services/highlight.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})
export class BodyComponentComponent implements OnInit {

  laboratory?: ILaboratory;

  labId?: string;

  constructor(private readonly labService: LabDetailsService,
              private highlightService: HighlightService,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.ngOnInit()
    })
  }

  ngOnInit(): void {
    this.labId = this.route.snapshot.params['id'];
    this.labService.getLab(this.labId).subscribe((data) => {
      this.laboratory = data
    });

    this.highlightService.highlightAll();
  }

}
