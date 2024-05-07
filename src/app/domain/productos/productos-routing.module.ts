import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosRenderComponent } from './pages/productos-render/productos-render.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosRenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
