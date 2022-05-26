import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = []; //declaring array of products to store in the cart


  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  //add product to cart
  addToCart(product: Product) {
    this.items.push(product);
  }

  //retrieve cart
  getItems() {
    return this.items;
  }

  //empty cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(
    private http: HttpClient
  ) {}
}
