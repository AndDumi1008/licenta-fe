import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CodeInputComponent} from "./code-input/code-input.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {BodyComponentComponent} from "./body-component/body-component.component";

const routes: Routes = [
  { path: 'courseview', component: BodyComponentComponent },
  { path: 'profile', component: UserProfileComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot((routes))
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
