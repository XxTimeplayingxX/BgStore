import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosRoutingModule } from './favoritos-routing.module';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { FavoritosRenderComponent } from './pages/favoritos-render/favoritos-render.component';


@NgModule({
  declarations: [
    FavoritosComponent,
    FavoritosRenderComponent
  ],
  imports: [
    CommonModule,
    FavoritosRoutingModule
  ]
})
export class FavoritosModule { }
