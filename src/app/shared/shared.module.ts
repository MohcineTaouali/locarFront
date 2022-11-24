import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

const COMPONENT=[
  HeaderComponent,
  FooterComponent,
  BreadcrumbComponent,
]
@NgModule({
  declarations: [
    COMPONENT
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    COMPONENT
  ]
})
export class SharedModule { }
