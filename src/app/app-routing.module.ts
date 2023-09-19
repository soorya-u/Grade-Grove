import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { DepartmentComponent } from './components/department/department.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"department", component: DepartmentComponent},
  {path:"result/first-sem", component: ResultsComponent},
  {path:"result/first-sem/usn/:id", component: ProfileComponent},
  {path:"result/sec-sem", component: ResultsComponent},
  {path:"result/sec-sem/usn/:id", component: ProfileComponent},
  {path:"result/third-sem", component: ResultsComponent},
  {path:"result/third-sem/usn/:id", component: ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
