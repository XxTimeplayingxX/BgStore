import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosRenderComponent } from './pages/productos-render/productos-render.component';
import { NavbarComponent } from '../shared/navBar/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductoComponent,
    ProductosRenderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
