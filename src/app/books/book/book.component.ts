import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  isInCart: boolean = false;

  @Input() book: Book = {} as Book;
  // @Output() bookEmitter = new EventEmitter<Book>();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  // addToCart() {
  //   this.bookEmitter.emit(this.book);
  // }

  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.book);
  }
  removeFromcart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
