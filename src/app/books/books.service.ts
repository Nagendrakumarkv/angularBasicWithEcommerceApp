import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'Clean Book',
        author: 'Robert C Mart',
        image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
        amount: 700,
      },
      {
        name: 'Programmetic Programmer',
        author: 'David Thomas',
        image:
          'https://m.media-amazon.com/images/I/91WFb-PpoNL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 800,
      },
      {
        name: 'Clean Book',
        author: 'Robert C Mart',
        image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
        amount: 700,
      },
      {
        name: 'Programmetic Programmer',
        author: 'David Thomas',
        image:
          'https://m.media-amazon.com/images/I/91WFb-PpoNL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 800,
      },
    ];
  }
}
