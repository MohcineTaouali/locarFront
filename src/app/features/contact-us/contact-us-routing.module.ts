import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';
import { TitleContactUsComponent } from './title-contact-us/title-contact-us.component';

const routes: Routes = [
  {path:"", component:ContactUsComponent},
  {path:"", component:TitleContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
