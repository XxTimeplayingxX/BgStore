import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: ()=>import('./domain/productos/productos.module').then(e=>e.ProductosModule)
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'favoritos',
        loadChildren: ()=>import('./domain/favoritos/favoritos.module').then(f=>f.FavoritosModule)
      }
    ]
  },
  {
    path: '**',
    children:[
      {
        path: '**',
        loadChildren: ()=>import('./domain/notFound/not-found.module').then(np=>np.NotFoundModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
