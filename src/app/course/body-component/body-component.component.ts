import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})
export class BodyComponentComponent implements OnInit {

  constructor() { }

  exerciseTitle = "Introduction to variables"
  lecture = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium ante id ligula ultrices, quis mattis ipsum vehicula. Vestibulum a purus sollicitudin, mollis libero non, convallis ante. Sed faucibus turpis non diam tristique rhoncus. Cras nec ligula nec urna pulvinar fermentum non eu lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse convallis lorem sed lectus ornare molestie. Maecenas at sapien sit amet lacus tempus molestie. Phasellus sem nunc, consequat in placerat sit amet, vulputate cursus massa. Sed sagittis efficitur justo non commodo. Mauris rutrum at metus vel pretium. Duis eget convallis eros. Nulla porta mauris quis est vestibulum, eget sodales metus viverra.`;

  exerciseSubtitle = "Exercise"
  exercise = `int represent an integer<br/>
  float or double can are floating numbers<br/>
  String is an object that contains text`



  type?: string
  isInput?: boolean

  ngOnInit(): void {
    this.type = "code-input";
    // this.type = "question-input";
    this.isInput = true;
  }

}
