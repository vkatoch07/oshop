import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule,
    CustomFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule,
  ],
  exports:[
    ProductCardComponent,
    ProductQuantityComponent,
    OrderDetailComponent,
    CommonModule,
    FormsModule,
    DataTablesModule,
    CustomFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule
  ],
  providers: [
    AuthService,
    AuthguardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
