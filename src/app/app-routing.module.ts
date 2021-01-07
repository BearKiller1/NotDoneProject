import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './menu/product/product.component';
import { HomeComponent } from './menu/home/home.component';
import { AboutComponent } from './menu/about/about.component';
import { ContactComponent } from './menu/contact/contact.component';
import { Child1Component } from './menu/child1/child1.component';
import { Child2Component } from './menu/child2/child2.component';
import { Child3Component } from './menu/child3/child3.component';
import { Child4Component } from './menu/child4/child4.component';
import { ErrorComponent } from './menu/error/error.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"product",
    component:ProductComponent,
    children:[
      {
        path:"child1",
        component:Child1Component,
      },
      {
        path:"child2",
        component:Child2Component,
      },
      {
        path:"child3",
        component:Child3Component,
      },
      {
        path:"child4",
        component:Child4Component,
      }
    ]
  },
  {
    path:"about",
    component:AboutComponent,
  },
  {
    path:"contact",
    component:ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
