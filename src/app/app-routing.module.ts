import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from "./_components/user-profile/user-profile.component";
import {BodyComponentComponent} from "./_pages/courseview/body-component/body-component.component";
import {CoursePageComponent} from "./_pages/course-page/course-page.component";

const routes: Routes = [
  {path: 'coursePage/:id/lab/:id', component: BodyComponentComponent},
  {path: 'coursePage/:id', component: CoursePageComponent},
  // {path: 'coursePage/:id', component: CoursePageComponent,children: [
  //     {
  //       path: 'lab/:id', component: BodyComponentComponent
  //     }
  //   ]},
  {path: 'profile', component: UserProfileComponent}
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
