import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseviewPageComponent} from "./_pages/courseview-page/courseview-page.component";
import {CoursePageComponent} from "./_pages/course-page/course-page.component";
import {LoginComponent} from "./_pages/login-page/login.component";
import {RegisterPageComponent} from "./_pages/register-page/register-page.component";
import {ProfilePageComponent} from "./_pages/profile-page/profile-page.component";
import {SidenavUserProfileComponent} from "./_components/sidenav-user-profile/sidenav-user-profile.component";
import {HomePageComponent} from "./_pages/home-page/home.component";

const routes: Routes = [

  {
    path: 'coursePage/:id',
    children: [
      {
        path: '',
        component: CoursePageComponent,
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
        component: SidenavUserProfileComponent
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
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: '', component: HomePageComponent}
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
