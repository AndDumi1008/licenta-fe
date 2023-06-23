import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {UserService} from "../../_services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CourseService} from "../../_services/course.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public isMenuOpen = false;
  public searchValue = '';
  public searchResults: any = [];

  @ViewChild('top-nav--search-results') searchResultsList?: ElementRef;

  constructor(public userService: UserService,
              private _snackBar: MatSnackBar,
              private courseService: CourseService,
              private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.searchResultsList?.nativeElement) {
        this.isMenuOpen = false;
      }
    });
  }

  ngOnInit(): void {
    if (this.getUserState()) {
      this.userService.getUser(localStorage.getItem('uid')!).subscribe((user) => {
          if (user.uniqueId != null) {
            this.userService.refreshUserToken();
          }
        },
        () => {
          this._snackBar.open("Your session has expired. Please log in again!", "Close", {duration: 5000});
          this.userService.userLogout();
          this.userService.redirectTo("/login")
        });
    }
  }

  getUserState() {
    return this.userService.getLocalStorage('isLogged') == 'true';
  }

  logout() {
    this.userService.userLogout();
  }

  onSearch() {
    if(this.searchValue.length > 3) {
      this.courseService.searchCourse(this.searchValue).subscribe((data) => {
        this.isMenuOpen = true;
        this.searchResults = data;
      })
    }
  }

  protected readonly onsubmit = onsubmit;
}
