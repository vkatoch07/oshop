import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { LoginComponent } from './core/components/login/login.component';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { environment } from 'environments/environment';
import { SharedModule } from 'shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { ShoppingModule } from './shopping/shopping.module';
import { ProductsComponent } from './shopping/components/products/products.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ShoppingModule,
    AdminModule,
    CoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [
    AdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
