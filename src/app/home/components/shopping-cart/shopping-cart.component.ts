import { Component, inject, OnInit } from '@angular/core';
import { ProductDetail } from '../../interfaces/product.interface';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  public productService = inject(ProductService);
  public productos: ProductDetail[] = []

  constructor() {
    this.productos = this.productService.getProductCart();
   }
  
  displayedColumns = ['NombreProducto', 'Precio', 'Acciones'];

  datasource = this.productos;
  
  deleteProductForCart(producto: ProductDetail){
    this.productService.removeProductCart(producto);
  }
  // getTotalCost() {
  //   return this.productos.map(t => t.Precio).reduce((acc, value) => acc + value, 0);
  // }

  ngOnInit() {
  }

}
