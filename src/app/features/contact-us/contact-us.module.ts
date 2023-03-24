import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { TitleContactUsComponent } from './title-contact-us/title-contact-us.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    TitleContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule
  ]
})
export class ContactUsModule { }
