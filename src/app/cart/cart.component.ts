import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  clearCart(){
    this.cartService.clearCart();
    window.alert('Your cart has been emptied!');
    window.location.reload();
  }

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
