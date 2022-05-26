import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  clearCart() {
    this.cartService.clearCart();
    window.alert('Your cart has been emptied!');

    //This is awful way to reload the page, because it reloads all the components
    //need to use routing to reload just the changed components
    window.location.reload();
  }

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
