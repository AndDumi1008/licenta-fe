import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Judge0Service} from "../../_services/judge0.service";
import {environment} from "../../../environments/environment";
import {ILaboratory} from "../../_interfaces/ILaboratory";
import {MatSnackBar} from "@angular/material/snack-bar";
import * as buffer from "buffer";

@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CodeInputComponent implements OnInit {

  codeMirrorOptions = environment.codeMirrorOptions

  codeMirrorOptions2: any = {
    mode: null,
    readOnly: "nocursor",
    gutters: false
  }

  // TODO: Terminal output after Test/Submit
  readOnlyArea: string = "Code output...";

  // @Input() code: string = "";
  @Input() laboratory!: ILaboratory;

  constructor(private judge0: Judge0Service,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    // TODO: change highlight based on Lab Specification
    // this.codeMirrorOptions.mode = this.laboratory.codeLanguage
  }


  compileCode() {
    let jsonToken: { token: string; };
    let jsonOutput: {
      stdout: string | null,
      stderr: string | null,
      compile_output: string | null
    };

    // TODO: change language ID based of lab specification
    this.judge0.postSubmision(62, this.laboratory.codeInput, "", this.laboratory.codeOutput).subscribe((token) => {
      jsonToken = token
    }, null, () => {
      this.judge0.getSubmision(jsonToken.token).subscribe((data: any) => {
        jsonOutput = data

        console.log(data)
        if (jsonOutput.stdout != null) {
          this.readOnlyArea = new buffer.Buffer(jsonOutput.stdout!, "base64").toString()

          if(new buffer.Buffer(jsonOutput.stdout!, "base64").toString().trim() == this.laboratory.codeOutput) {
            this._snackBar.open("Correct answer!", "Close", {duration: 5000});
          } else {
            this._snackBar.open("Wrong answer!", "Close", {duration: 5000});
          }
        }

        if (jsonOutput.compile_output != null) {
          this.readOnlyArea = new buffer.Buffer(jsonOutput.compile_output!, "base64").toString()
        }
      });
    })
  }

}
