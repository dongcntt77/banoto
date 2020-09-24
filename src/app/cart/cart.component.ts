import { BaseComponent } from './../lib/base-component';
import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends BaseComponent implements OnInit {
  items:any;
  thanhtien:any;
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.items = res;
      this.thanhtien = 0;
      for(let x of this.items){ 
        this.thanhtien += x.quantity * x.item_price;
      } 
    });
  } 
  clearCart() { 
    this._cart.clearCart();
    alert('Xóa thành công');
  }
  addQty(item, quantity){ 
    item.quantity =  quantity;
    this._cart.addQty(item);
  }
}
