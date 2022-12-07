import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodeInputComponent } from './courseview/body/utils/code-input/code-input.component';
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
import { BodyComponentComponent } from './courseview/body-component/body-component.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { UserProfileComponent } from './user-profile/body/user-profile/user-profile.component';
import { UserFeedComponent } from './user-profile/body/utils/user-feed/user-feed.component';
import { UserSidebarComponent } from './user-profile/body/user-sidebar/user-sidebar.component';
import { MediumCourseComponent } from './user-profile/body/utils/course/medium-course/medium-course.component';
import { CompactCourseComponent } from './user-profile/body/utils/course/compact-course/compact-course.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { SidenavCourseTreeComponent } from './courseview/sidenav-course-tree/sidenav-course-tree.component';
import { QuestionInputComponent } from './courseview/body/utils/question-input/question-input.component';
import { GoogleAuthComponent } from './user-profile/login/google-auth/google-auth.component';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import {HttpClientModule} from "@angular/common/http";
import {MatDividerModule} from "@angular/material/divider";
import {HighlightService} from "./services/highlight.service";
import { CoursePageComponent } from './courseview/course-page/course-page.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    AppComponent,
    CodeInputComponent,
    MenuListComponent,
    TopBarComponent,
    BodyComponentComponent,
    UserProfileComponent,
    UserFeedComponent,
    UserSidebarComponent,
    MediumCourseComponent,
    CompactCourseComponent,
    SidenavCourseTreeComponent,
    QuestionInputComponent,
    GoogleAuthComponent,
    CoursePageComponent,
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
    MatProgressBarModule,
    SocialLoginModule,
    HttpClientModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '373949061902-8509uero15rr1p63e89rt1kh0bim7p8r.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    HighlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);

  }
}
