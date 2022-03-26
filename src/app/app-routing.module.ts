import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponentComponent } from './home-component/home-component.component';


const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  { path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({

  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
