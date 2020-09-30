import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'shared/models/order';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order;
  id;
  url: string;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
    this.orderService.getOrder(this.id).take(1).subscribe(o => this.order = o);
    }
    this.url = this.router.url;
  }

  navigateBack(){
    if(this.url.includes('my/orders')){
      this.router.navigate(['my/orders']);
    } else{
      this.router.navigate(['admin/orders']);
    }
  }
}
