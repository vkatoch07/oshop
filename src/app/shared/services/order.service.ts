import { Injectable, Query } from '@angular/core';
import { AngularFireDatabase, AngularFireList, QueryFn } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order){
    const result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders(){
   return this.db.list('/orders').snapshotChanges();
  }

getOrdersByUser(userId: string) {
  return this.db.list('/orders', query => query.orderByChild(userId))
  .snapshotChanges();
  }
}
