import { Component, OnInit } from '@angular/core';
import { producto } from '../../../MODELS/producto.models';
import { ProductoService } from '../../../services/producto.service';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{
  productos = <producto[]>[];
  productosFavoritos = <producto[]>[];
  forms: FormGroup;
  labelAddToFavorite : string = 'Añadir a Favoritos';
  labelAddedToFavorite : string = 'Añadido a Favoritos';

  constructor(private productService:ProductoService, fb:FormBuilder, private routerTo:Router)
  {
    this.forms = fb.group({
      productToFind: ''
    });
  }

  ngOnInit(): void {
    this.getData();
    localStorage.clear();
  }
  getData(){
    this.productService.getData().subscribe((data)=>{
      console.log(data);
      this.productos = data.data;
      console.log(this.productos);
    })
  }
  getDataName(){
    this.productService.getDataName(this.forms.value.productToFind).subscribe((product)=>{
      this.productos = product.data;
    })
  }

  FavoriteProduct(index:number){
    this.productosFavoritos.push(this.productos[index]);
    console.log(this.productosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(this.productosFavoritos));
    console.log(localStorage.getItem('favoritos'));
  }
  moverAFavoritos(){
    this.routerTo.navigateByUrl('/favoritos');
  }
}
