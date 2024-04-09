import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './pages/products/products.component';
import { homeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    homeRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [ProductsComponent, ProductListComponent]
})
export class HomeModule { }
