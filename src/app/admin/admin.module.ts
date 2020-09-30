import { NgModule } from '@angular/core';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SharedModule } from 'shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthguardService } from 'shared/services/authguard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { OrderDetailComponent } from 'app/shopping/components/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthguardService, AdminAuthGuardService]
      },
      {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthguardService, AdminAuthGuardService]
      },
      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthguardService, AdminAuthGuardService]
      },
      {
        path: 'admin/orders/:id',
        component: OrderDetailComponent,
        canActivate: [AuthguardService, AdminAuthGuardService]
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthguardService, AdminAuthGuardService]
      }
    ])
  ]
})
export class AdminModule { }
