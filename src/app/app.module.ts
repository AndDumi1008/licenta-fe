import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodeInputComponent } from './code-input/code-input.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {CommonModule} from "@angular/common";
import { MenuListComponent } from './menu-list/menu-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { AppRoutingModule } from './app-routing.module';
import { BodyComponentComponent } from './body-component/body-component.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserMainComponent } from './user/user-main/user-main.component';
import { UserFeedComponent } from './user/user-feed/user-feed.component';
import { UserSidebarComponent } from './user/user-sidebar/user-sidebar.component';
import { MediumCourseComponent } from './course/medium-course/medium-course.component';
import { CompactCourseComponent } from './course/compact-course/compact-course.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    AppComponent,
    CodeInputComponent,
    MenuListComponent,
    TopBarComponent,
    BodyComponentComponent,
    UserProfileComponent,
    UserMainComponent,
    UserFeedComponent,
    UserSidebarComponent,
    MediumCourseComponent,
    CompactCourseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    CommonModule,
    CodemirrorModule,
    FontAwesomeModule,
    AppRoutingModule,
    MatSidenavModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components'
    // library.addIcons(faCircleInfo, faCoffee);
    library.addIconPacks(fas, far, fab);

  }
}
