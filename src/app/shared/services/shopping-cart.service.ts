import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Product } from 'shared/models/product';
import 'rxjs/add/operator/take';
import { take } from 'rxjs-compat/operator/take';
import { ShoppingCart } from 'shared/models/shopping-cart';
import 'rxjs/add/operator/map';
import { Observable, pipe } from 'rxjs';
import { map } from 'jquery';
import { ShoppingCartItem } from 'shared/models/shopping-cart-item';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) {
  }

  async addToCart(product: Product){
    this.updateItem(product, 1);
  }

  async removeFromCart(product: Product){
    this.updateItem(product, -1);
  }

  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).snapshotChanges()
    .map((x: any)=> (x.payload.exists()) ? new ShoppingCart(x.payload.exportVal().items) :
    new ShoppingCart(x.items));
    }

  async clearCart(){
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getItem(cartId: string, productId: string){
     return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId() : Promise<string>{
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

 private async updateItem(product: Product, change: number){
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.key);
	  item$.valueChanges().take(1).subscribe((item: ShoppingCartItem) => {
      const quantity = (item ? (item.quantity || 0) : 0) + change;

      if (!quantity)
      item$.remove();

      else {
        item$.update({
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity
      });
    }
  });
}

}
