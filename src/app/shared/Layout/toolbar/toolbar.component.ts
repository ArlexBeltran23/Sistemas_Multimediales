import { Component, Inject, OnInit, ViewChild, inject } from '@angular/core';
import { ProductService } from 'src/app/home/Services/product.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public productService = inject(ProductService)
  public productosCarrito: number = 0;
  constructor() { }
  ngOnInit() {
   this.productosCarrito = this.productService.getProductCart().length;
  }

}
