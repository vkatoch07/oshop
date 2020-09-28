import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { Subscription, Subject } from 'rxjs';
import { Product } from 'shared/models/product';


@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private productService: ProductService) {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.subscription = this.productService.getAll()
    .subscribe(products => {
      this.filteredProducts = this.products = products;
      this.dtTrigger.next();
     });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.dtTrigger.unsubscribe();
  }

}
