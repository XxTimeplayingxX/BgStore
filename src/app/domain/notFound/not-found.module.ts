import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotFoundRenderComponent } from './pages/not-found-render/not-found-render.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    NotFoundRenderComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
