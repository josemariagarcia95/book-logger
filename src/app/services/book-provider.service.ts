import { Injectable } from '@angular/core';
import { BookData } from 'src/interfaces/book-data/book-data.interface';
import { GoodReadsProvider } from './book-data-provider';

@Injectable( {
  providedIn: 'root'
} )
export class BookProviderService {
  constructor( private goodreadsProvider: GoodReadsProvider ) {}

  getBookData( bookISBN: string ): Promise < object > {
    return new Promise( ( resolve, reject ) => {
      // this.bookQueryUrls( bookISBN );
      this.goodreadsProvider.getBook( bookISBN ).then( data => {
        console.log( 'this is the resolve in book service' );
        resolve( data );
      } ).catch( error => {
        console.log( 'this is the reject in book service' );
        reject( error );
      } );
    } );
  }
}
