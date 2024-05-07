import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosRenderComponent } from './pages/favoritos-render/favoritos-render.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritosRenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritosRoutingModule { }
