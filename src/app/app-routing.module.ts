import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './travel/home/home.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { BlogComponent } from './travel/blog/blog.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
