import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Judge0Service} from "../../_services/judge0.service";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CodeInputComponent implements OnInit {

  codeMirrorOptions = environment.codeMirrorOptions

  // codeMirrorOptions: any = {
  //   // Find other language filters https://codemirror.net/5/mode/clike/
  //   // at the bottom
  //   mode: "text/x-java",
  //   indentWithTabs: true,
  //   smartIndent: true,
  //   lineNumbers: true,
  //   lineWrapping: false,
  //   extraKeys: {"Ctrl-Space": "autocomplete"},
  //   gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  //   autoCloseBrackets: true,
  //   matchBrackets: true,
  //   lint: true,
  //   viewportMargin: Infinity
  // };

  codeMirrorOptions2: any = {
    mode: null,
    readOnly: "nocursor",
    gutters: false
  }

  // TODO: Terminal output after Test/Submit
  readOnlyArea: string = "Code output...";

  @Input() code: string = "";

  constructor(private judge0: Judge0Service) {
  }

  ngOnInit() {
  }

  // TODO: this will make POST of code to see execution
  compileCode() {
    let jsonToken: { token: string; };
    let jsonOutput: {
      stdout: string | null,
      stderr: string | null,
      status_id: number,
      language_id: number
    };

    this.judge0.postSubmision(62, this.code, "").subscribe((token) => {
      jsonToken = token
    }, null, () => {
      this.judge0.getSubmision(jsonToken.token).subscribe((data: any) => {
        jsonOutput = data
        console.log("this is data: ", jsonOutput)

        if (typeof jsonOutput.stdout === "string") {
          this.readOnlyArea = atob(jsonOutput.stdout)
        }
      });
    })
  }

}
