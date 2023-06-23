import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-top-bar-search-result',
  templateUrl: './top-bar-search-result.component.html',
  styleUrls: ['./top-bar-search-result.component.css']
})
export class TopBarSearchResultComponent implements OnInit {

  @Input() title?: string
  @Input() uid?: string
  @Input() img?: string
  @Input() id?: string

  authorName?: string
  authorPhoto?: string
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if(!this.uid) return
    this.userService.getUser(this.uid!).subscribe((data) => {
      this.authorName = data.name;
      this.authorPhoto = data.photoURL;
    })
  }
}
