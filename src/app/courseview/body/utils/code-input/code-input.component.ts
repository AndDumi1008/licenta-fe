import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CodeInputComponent implements OnInit {

  codeMirrorOptions: any = {
    // Find other language filters https://codemirror.net/5/mode/clike/
    // at the bottom
    mode: "text/x-java",
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    lineWrapping: false,
    extraKeys: {"Ctrl-Space": "autocomplete"},
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
    viewportMargin: Infinity
  };

  @Input() code?: string;

  ngOnInit() {}

  // TODO: this will make POST of code to see execution
  setEditorContent(event: any) {
    // console.log(this.query);
  }

}
