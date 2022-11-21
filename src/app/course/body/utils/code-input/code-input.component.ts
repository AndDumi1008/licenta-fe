import {Component, OnInit, ViewEncapsulation} from '@angular/core';


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
    extraKeys: { "Ctrl-Space": "autocomplete" },
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
    viewportMargin: Infinity
  };

  query?: string;

  ngOnInit() {
    this.query = `public class Simple {
  public static void main(String args[]) {

  System.out.println("hello samurai, Ready for some java?");
  }
}`;

  }
  setEditorContent(event:any) {
    console.log(this.query);
  }

}
