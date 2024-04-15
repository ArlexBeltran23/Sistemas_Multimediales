import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { PortalPagosComponent } from './pages/portal-pagos/portal-pagos.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'carrito',
        component: PortalPagosComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class homeRoutingModule {}
