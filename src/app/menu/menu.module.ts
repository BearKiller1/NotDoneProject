import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { ErrorComponent } from './error/error.component';

import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ProductComponent, HomeComponent, AboutComponent, ContactComponent, Child1Component, Child2Component, Child3Component, Child4Component, ErrorComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ProductComponent, HomeComponent, AboutComponent, ContactComponent, Child1Component, Child2Component, Child3Component, Child4Component, ErrorComponent]
})
export class MenuModule { }
