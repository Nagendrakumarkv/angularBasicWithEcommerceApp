import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartservice: CartService) {}

  ngOnInit(): void {}
  getCart() {
    return this.cartservice.get();
  }
}
