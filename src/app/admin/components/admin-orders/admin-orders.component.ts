import { Component } from '@angular/core';
import { OrderService } from 'shared/services/order.service';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
orders$;
  constructor(private orderService: OrderService) {
    this.orders$ = this.orderService.getOrders();
   }
}
