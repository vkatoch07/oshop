import { NgModule } from '@angular/core';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { AuthguardService } from 'shared/services/authguard.service';
import { SharedModule } from 'shared/shared.module';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    OrderDetailComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthguardService]},
      {path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthguardService]},
      {path: 'my/orders/:id', component: OrderDetailComponent, canActivate: [AuthguardService]},
      {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthguardService]}
    ])
  ]
})
export class ShoppingModule { }
