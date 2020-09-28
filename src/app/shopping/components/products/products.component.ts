import { Component, OnInit } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'shared/models/product';
import { throws } from 'assert';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private products: Product[] = [];
  private filteredProducts: Product[];
  category: string;
  cart$: Observable<ShoppingCart>;


  constructor(private route:ActivatedRoute, private productService: ProductService,
     private shoppingCartservice: ShoppingCartService) {}

  async ngOnInit() {
   this.cart$ =  await this.shoppingCartservice.getCart();
    this.populateProducts();
  }

  private populateProducts(){
    this.productService.getAll().
    switchMap(products=> {
      this.products = products;
      return this.route.queryParamMap
    })
    .subscribe(params => {
      this.category = params.get('category');
      this.applyFilter();
    });
  }

  private applyFilter(){
    this.filteredProducts = (this.category) ?
    this.products.filter(p => p.category === this.category) :
    this.products;
  }
}
