import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseviewPageComponent} from "./_pages/courseview-page/courseview-page.component";
import {CoursePageComponent} from "./_pages/course-page/course-page.component";
import {LoginComponent} from "./_pages/login-page/login.component";
import {RegisterPageComponent} from "./_pages/register-page/register-page.component";
import {ProfilePageComponent} from "./_pages/profile-page/profile-page.component";
import {SidenavUserProfileComponent} from "./_components/sidenav-user-profile/sidenav-user-profile.component";
import {HomePageComponent} from "./_pages/home-page/home.component";
import {BrowsePageComponent} from "./_pages/browse-page/browse-page.component";
import {CreateCoursePageComponent} from "./_pages/create-course-page/create-course-page.component";
import {
  CreateNewLabComponent
} from "./_components/create-new-lab-component/create-new-lab.component";

const routes: Routes = [

  {
    path: 'coursePage/create_new_course',
    component: CreateCoursePageComponent
  },
  {
    path: 'coursePage/:id',
    children: [
      {
        path: '',
        component: CoursePageComponent
      },
      {
        path: 'lab/new',
        component: CreateNewLabComponent
      },
      {
        path: 'lab/:labId',
        component: CourseviewPageComponent
      }
    ]
  },
  {
    path: 'profile',
    children: [
      {
        path: '',
        component: SidenavUserProfileComponent
      },
      {
        path: 'dashboard',
        component: ProfilePageComponent
      },
      {
        path: 'courses',
        component: BrowsePageComponent
      },
      {
        path: 'graph',
        component: SidenavUserProfileComponent
      },
      {
        path: 'settings',
        component: SidenavUserProfileComponent
      },
    ]
  },
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'browse',
        component: BrowsePageComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterPageComponent
      },

    ],
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot((routes))
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
