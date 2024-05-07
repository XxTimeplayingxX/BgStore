import { Component, OnInit } from '@angular/core';
import { producto } from '../../../MODELS/producto.models';
import { ProductoService } from '../../../services/producto.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit{
  productos = <producto[]>[];
  productosFavoritos = <producto[]>[];

  constructor(private productService:ProductoService){}

  ngOnInit(): void {
    this.getFavoriteData();
  }
  getFavoriteData(){
    this.productosFavoritos = JSON.parse(localStorage.getItem('favoritos')!)
    console.log(this.productosFavoritos);
  }
  eliminarDeFavoritos(index:number){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')!) || [];
  if (index < 0 || index >= favoritos.length) {
    console.error('Invalid index:', index);
    return;
  }
  favoritos.splice(index, 1);
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
  this.getFavoriteData(); 
  }

  
}
