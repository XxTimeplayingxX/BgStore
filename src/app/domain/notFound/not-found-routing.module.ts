import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundRenderComponent } from './pages/not-found-render/not-found-render.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundRenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
