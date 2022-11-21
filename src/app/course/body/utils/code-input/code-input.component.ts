import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CodeInputComponent implements OnInit {
  exerciseTitle = "Introduction to variables"
  exerciseSubtitle = "Exercise"
  exercise = `int represent an integer<br/>
  float or double can are floating numbers<br/>
  String is an object that contains text`

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

  lecture?: string;
  query?: string;

  ngOnInit() {
    this.query = `public class Simple {
  public static void main(String args[]) {

  System.out.println("hello samurai, Ready for some java?");
  }
}`;
    this.lecture = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium ante id ligula ultrices, quis mattis ipsum vehicula. Vestibulum a purus sollicitudin, mollis libero non, convallis ante. Sed faucibus turpis non diam tristique rhoncus. Cras nec ligula nec urna pulvinar fermentum non eu lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse convallis lorem sed lectus ornare molestie. Maecenas at sapien sit amet lacus tempus molestie. Phasellus sem nunc, consequat in placerat sit amet, vulputate cursus massa. Sed sagittis efficitur justo non commodo. Mauris rutrum at metus vel pretium. Duis eget convallis eros. Nulla porta mauris quis est vestibulum, eget sodales metus viverra.`;


  }
  setEditorContent(event:any) {
    console.log(this.query);
  }

  printText():void {
    console.log(this.query)
  }

}
