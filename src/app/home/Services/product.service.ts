import { Injectable } from '@angular/core';
import { ProductDetail } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productsCart: ProductDetail[] = [];

  addProductCart(producto: ProductDetail){
    producto.cantidad = 1;
    this.productsCart.push(producto)
    console.log(this.productsCart)
 }
  
  removeProductCart(producto: ProductDetail){
    const index = this.productsCart.indexOf(producto);
    this.productsCart.splice(index, 1);
    console.log(this.productsCart);    
  }

  getProductCart(){
    return this.productsCart;
  }

  constructor() { }

}
