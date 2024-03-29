import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CodeInputComponent} from './_features/code-input/code-input.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {CommonModule} from "@angular/common";
import {TopBarComponent} from './_components/top-bar/top-bar.component';
import {AppRoutingModule} from './app-routing.module';
import {CourseviewPageComponent} from './_pages/courseview-page/courseview-page.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {UserFeedComponent} from './_features/user-feed/user-feed.component';
import {MediumCourseComponent} from './_features/course/medium-course/medium-course.component';
import {CompactCourseComponent} from './_features/course/compact-course/compact-course.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {SidenavCourseTreeComponent} from './_components/sidenav-course-tree/sidenav-course-tree.component';
import {HttpClientModule} from "@angular/common/http";
import {MatDividerModule} from "@angular/material/divider";
import {HighlightService} from "./_services/highlight.service";
import {CoursePageComponent} from './_pages/course-page/course-page.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LoginComponent} from './_pages/login-page/login.component';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from '../environments/environment';
import {getAuth, provideAuth} from "@angular/fire/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {MatIconModule} from "@angular/material/icon";
import {RegisterPageComponent} from './_pages/register-page/register-page.component';
import {ProfilePageComponent} from './_pages/profile-page/profile-page.component';
import {SidenavUserProfileComponent} from './_components/sidenav-user-profile/sidenav-user-profile.component';
import {MatListModule} from "@angular/material/list";
import {HomePageComponent} from "./_pages/home-page/home.component";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {QuillModule} from "ngx-quill";
import {MatSelectModule} from "@angular/material/select";
import { BrowsePageComponent } from './_pages/browse-page/browse-page.component';
import { EditCourseComponent } from './_features/edit-course/edit-course.component';
import { CreateCoursePageComponent } from './_pages/create-course-page/create-course-page.component';
import { CreateNewLabComponent } from './_components/create-new-lab-component/create-new-lab.component';
import {MatDialogModule} from "@angular/material/dialog";
import { TopBarSearchResultComponent } from './_components/top-bar-search-result/top-bar-search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeInputComponent,
    TopBarComponent,
    CourseviewPageComponent,
    UserFeedComponent,
    MediumCourseComponent,
    CompactCourseComponent,
    SidenavCourseTreeComponent,
    CoursePageComponent,
    LoginComponent,
    CourseviewPageComponent,
    RegisterPageComponent,
    ProfilePageComponent,
    SidenavUserProfileComponent,
    HomePageComponent,
    BrowsePageComponent,
    EditCourseComponent,
    CreateCoursePageComponent,
    CreateNewLabComponent,
    TopBarSearchResultComponent,

  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        FormsModule,
        MatDialogModule,
        MatCardModule,
        CommonModule,
        CodemirrorModule,
        AppRoutingModule,
        MatSidenavModule,
        MatProgressBarModule,
        HttpClientModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        AngularFireModule.initializeApp(environment.firebase),
        MatIconModule,
        ReactiveFormsModule,
        MatListModule,
        NgbCarouselModule,
        MatSnackBarModule,
        QuillModule.forRoot(),
        MatSelectModule,
    ],
  providers: [
    HighlightService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
