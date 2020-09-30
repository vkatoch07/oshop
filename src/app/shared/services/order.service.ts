import { query } from '@angular/animations';
import { Injectable, Query } from '@angular/core';
import { AngularFireDatabase, AngularFireList, QueryFn, snapshotChanges } from '@angular/fire/database';
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
    // tslint:disable-next-line: no-shadowed-variable
    return this.db.list('/orders', query => query.orderByChild('userId').equalTo(userId))
      .snapshotChanges();
    }

    getOrder(orderId: string){
      return this.db.object('/orders/' + orderId).valueChanges();
     }

}
