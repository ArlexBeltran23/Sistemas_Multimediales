import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  public products = [
    {
      foto: "https://m.media-amazon.com/images/I/518-9ZaLFML._AC_UF894,1000_QL80_.jpg",
      nombre: "Samsung Galaxy S23 Ultra",
      descripcion: "Smartphone Android de alta gama con pantalla AMOLED de 6.8 pulgadas, procesador Snapdragon 8 Gen 2, cámara cuádruple de 108MP y batería de 5000mAh.",
      tipoDeDispositivo: "Celular",
      precio: "5.000.000"
    },
    {
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUTM_FHNDJ41kaqWZDGtK5PHPgmiAXISjyk0Wh5X1pAA&s",
      nombre: "Apple iPhone 14 Pro Max",
      descripcion: "Smartphone iOS de alta gama con pantalla OLED de 6.7 pulgadas, procesador A17 Bionic, cámara triple de 48MP y batería de 4352mAh.",
      tipoDeDispositivo: "Celular",
      precio: "6.000.000"
    },
    {
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlgllT-pBx-nQUpQRF-e8xSYjh-rU5y6Qtw9tM_Y-Jw&s",
      nombre: "Xiaomi 13 Pro",
      descripcion: "Smartphone Android de alta gama con pantalla AMOLED de 6.7 pulgadas, procesador Snapdragon 8 Gen 2, cámara cuádruple de 50MP y batería de 5000mAh.",
      tipoDeDispositivo: "Celular",
      precio: "4.000.000"
    },
    {
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg34RKO7SGxtvS-46W8x3UWK61cqUpuiZ_0j-vZCnoQw&s",
      nombre: "Samsung Galaxy Z Fold4",
      descripcion: "Smartphone plegable Android con pantalla AMOLED de 7.6 pulgadas, procesador Snapdragon 8 Gen 2, cámara cuádruple de 50MP y batería de 4400mAh.",
      tipoDeDispositivo: "Celular",
      precio: "6.000.000"
    },
    {
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTun6BN187pw6KPTpr6VwCl0xa-79Nf-GQZNEqzrczJjg&s",
      nombre: "iPad Air (5th generation)",
      descripcion: "Tablet de gama alta con chip M1, pantalla Liquid Retina de 10.9 pulgadas, cámara trasera de 12MP y batería de hasta 10 horas.",
      tipoDeDispositivo: "Tablet",
      precio: "6.500.000"
    },
    {
      foto: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/12905764-0947-4b07-96c8-2239ff5fa2b8.b2fdd9950babef43a03e756b96cd5d0a.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      nombre: "Motorola Edge 40 Pro",
      descripcion: "Smartphone Android de alta gama con pantalla OLED de 6.6 pulgadas, procesador Snapdragon 8 Gen 1, cámara cuádruple de 50MP y batería de 4500mAh.",
      tipoDeDispositivo: "Celular",
      precio: "3.499.900"
    },
    {
      foto: "https://m.media-amazon.com/images/I/615rI0PoyOL.jpg",
      nombre: "Google Pixel 7 Pro",
      descripcion: "Smartphone Android de alta gama con pantalla OLED de 6.7 pulgadas, procesador Tensor 2, cámara triple de 50MP y batería de 5003mAh.",
      tipoDeDispositivo: "Celular",
      precio: "4.999.900"
    },
    {
      foto: "https://i5.walmartimages.com/seo/Lenovo-ZA940188US-Tab-P11-Plus-11-128GB-Storage-4GB-RAM-Slate-Grey-WIFI-Tablet_1ea60d85-494f-4a4b-9653-b1ba93379509.fafab68cd72f98876b071c285c5515f5.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      nombre: "Lenovo Tab P11 Plus",
      descripcion: "Tablet Android con pantalla 2K de 11.5 pulgadas, procesador MediaTek Kompanio 1300T, cámara trasera dual de 13MP y batería de 7700mAh.",
      tipoDeDispositivo: "Tablet",
      precio: "1.599.000"
    }  
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
