import {Component, OnInit} from '@angular/core';
import {ILaboratory} from "../../_interfaces/ILaboratory";

@Component({
  selector: 'app-create-new-lab-component',
  templateUrl: './create-new-lab.component.html',
  styleUrls: ['./create-new-lab.component.css']
})
export class CreateNewLabComponent implements OnInit {
  public newLab: ILaboratory = {
    id: 'new',
    codeInput: "",
    codeLanguage: "",
    codeOutput: "",
    content: "",
    exercise: "",
    title: "",
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
