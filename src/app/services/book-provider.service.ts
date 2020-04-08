import { Injectable } from '@angular/core';
import { BookData } from 'src/interfaces/book-data/book-data.interface';
import { GoodReadsProvider } from './book-data-provider';

@Injectable( {
  providedIn: 'root'
} )
export class BookProviderService {
  constructor( private goodreadsProvider: GoodReadsProvider ) {}

  getBookData( bookISBN: string ): Promise < BookData > {
    return new Promise( ( resolve, reject ) => {
      // this.bookQueryUrls( bookISBN );
      this.goodreadsProvider.getBook( bookISBN );
      resolve( {
        isbn: 'string',
        title: 'string',
        synopsis: 'string',
        editor: 'string'
      } );
    } );
  }
}
