import { Component } from '@angular/core';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;

  constructor(private authService: AuthService, private orderService: OrderService) {
    this.orders$ = this.authService.user$.switchMap(u => this.orderService.getOrdersByUser(u.uid));
  }
}
