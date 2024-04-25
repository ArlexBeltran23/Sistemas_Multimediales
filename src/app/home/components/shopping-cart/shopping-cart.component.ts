import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ProductDetail } from '../../interfaces/product.interface';
import { ProductService } from '../../Services/product.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  // Servicios
  public productService = inject(ProductService);

  // Propiedades
  public productos: ProductDetail[] = []

  constructor() {} 
  //Propiedades Tabla
  displayedColumns = ['NombreProducto', 'Precio', 'Acciones'];
  datasource = this.productos;
  @ViewChild(MatTable) table : MatTable<ProductDetail> | undefined;
  
  deleteProductForCart(producto: ProductDetail){
    this.productService.removeProductCart(producto);
    this.productService.getProductCart();
    this.table!.renderRows();
  }
  
  // getTotalCost() {
  //   return this.productos.map(t => t.Precio).reduce((acc, value) => acc + value, 0);
  // }

  ngOnInit() {
    this.productos = this.productService.getProductCart();
    console.log(this.productos);
    this.datasource = this.productos;    
  }

}
