import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  public isPanelVisible = window.innerWidth > 720
  constructor() { }

  ngOnInit(): void {
  }

  public togglePanelVisible() {
    this.isPanelVisible= !this.isPanelVisible
  }

}
