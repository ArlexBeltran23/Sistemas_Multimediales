import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
}
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  constructor() { }

  displayedColumns = ['NombreProducto', 'Cantidad', 'Precio', 'Foto', 'Acciones'];
  public productos = [
    {
        NombreProducto: "iPhone 13",
        Cantidad: 50,
        Precio: 2300000,
        Foto: "iphone13.jpg",
        Acciones: ["Ver detalles", "Agregar al carrito"]
    },
    {
        NombreProducto: "Samsung Galaxy S21",
        Cantidad: 30,
        Precio: 1600000,
        Foto: "galaxys21.jpg",
        Acciones: ["Ver detalles", "Agregar al carrito"]
    },
    {
        NombreProducto: "Google Pixel 6",
        Cantidad: 20,
        Precio: 2500000,
        Foto: "pixel6.jpg",
        Acciones: ["Ver detalles", "Agregar al carrito"]
    }
];


  getTotalCost() {
    return this.productos.map(t => t.Precio).reduce((acc, value) => acc + value, 0);
  }

  ngOnInit() {
  }

}
