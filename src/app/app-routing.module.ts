import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { EceProjectComponent } from "./pages/ece-project/ece-project.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { CsprojectComponent } from "./pages/csproject/csproject.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "blog",
    component : BlogComponent
  },
  {
    path : "ece-project",
    component : EceProjectComponent
  },
  {
    path : "csproject",
    component : CsprojectComponent
  },
  {
    path : "contactus",
    component : ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
