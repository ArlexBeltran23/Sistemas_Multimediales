import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './pages/products/products.component';
import { homeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {MatTableModule} from '@angular/material/table';
import { PortalPagosComponent } from './pages/portal-pagos/portal-pagos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    homeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,FormsModule,
    MatFormFieldModule,
     MatInputModule
  ],
  declarations: [ProductsComponent, ProductListComponent, ShoppingCartComponent, PortalPagosComponent]
})
export class HomeModule { }
