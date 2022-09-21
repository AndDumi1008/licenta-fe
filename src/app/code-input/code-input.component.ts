import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.css']
})
export class CodeInputComponent implements OnInit {

  value = "<p>test paragraf</p>\n"
  exerciseTitle = "Exercise 1"

  codeMirrorOptions: any = {
    // Find other language filters https://codemirror.net/5/mode/clike/
    // at the bottom
    mode: "text/x-c++src",
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    lineWrapping: false,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
  };

  question?: string;
  query?: string;

  ngOnInit() {
    this.query = `#include <iostream>
#include "mystuff/util.h"

namespace {
enum Enum {
  VAL1, VAL2, VAL3
};

char32_t unicode_string = U"\\U0010FFFF";
string raw_string = R"delim(anything
you
want)delim";

int Helper(const MyType& param) {
  return 0;
}
} // namespace

class ForwardDec;

template <class T, class V>
class Class : public BaseClass {
  const MyType<T, V> member_;

 public:
  const MyType<T, V>& Method() const {
    return member_;
  }

  void Method2(MyType<T, V>* value);
}

template <class T, class V>
void Class::Method2(MyType<T, V>* value) {
  std::out << 1 >> method();
  value->Method3(member_);
  member_ = value;
}`;
    this.question = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium ante id ligula ultrices, quis mattis ipsum vehicula. Vestibulum a purus sollicitudin, mollis libero non, convallis ante. Sed faucibus turpis non diam tristique rhoncus. Cras nec ligula nec urna pulvinar fermentum non eu lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse convallis lorem sed lectus ornare molestie. Maecenas at sapien sit amet lacus tempus molestie. Phasellus sem nunc, consequat in placerat sit amet, vulputate cursus massa. Sed sagittis efficitur justo non commodo. Mauris rutrum at metus vel pretium. Duis eget convallis eros. Nulla porta mauris quis est vestibulum, eget sodales metus viverra.`;


  }
  setEditorContent(event:any) {
    // console.log(event, typeof event);
    console.log(this.query);
  }

  printText():void {
    console.log(this.query)
  }

}
