import { Component, OnInit } from '@angular/core';
import * as monaco from "monaco-editor"


@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.css']
})
export class CodeInputComponent implements OnInit {

  value = "<p>test paragraf</p>\n"
  exerciseTitle = "Exercise 1"


  constructor() {}

  ngOnInit(): void {
  }

  printText():void {
    console.log(this.value)
  }

}
