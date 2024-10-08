import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { cart } from '../shared/models/cart';
import { cartitem } from '../shared/models/cartitem';
import { food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<cart> = new BehaviorSubject(this.cart);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  addToCart(food: food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) return;

    this.cart.items.push(new cartitem(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart(): void {
    this.cart = new cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    if (isPlatformBrowser(this.platformId)) {
      const cartJson = JSON.stringify(this.cart);
      localStorage.setItem('Cart', cartJson);
    }

    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): cart {
    if (isPlatformBrowser(this.platformId)) {
      const cartJson = localStorage.getItem('Cart');
      return cartJson ? JSON.parse(cartJson) : new cart();
    }
    return new cart();
  }
}
