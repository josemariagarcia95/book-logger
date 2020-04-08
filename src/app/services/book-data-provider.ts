import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookData } from 'src/interfaces/book-data/book-data.interface';

abstract class BookDataProvider {
  constructor( protected http: HttpClient ) {}
  abstract getBook( isbn: string ): Promise < BookData > ;
}

@Injectable( {
  providedIn: 'root',
} )
export class GoodReadsProvider extends BookDataProvider {
  constructor( protected http: HttpClient ) {
    super( http );
  }
  public getBook( isbn: string ): Promise < BookData > {
    return new Promise( ( resolve, reject ) => {
      const url = `https://www.goodreads.com/search?q=${isbn}`;
      // url, parameters, headers
      this.http.get( url, {} ).subscribe( response => {
        console.log( response );
      } );


      /*
      .then( data => {
        console.log( "get" );
        console.log( data.status );
        console.log( data.data ); // data received by server
        console.log( data.headers );
      } ).catch( error => {
        console.log( error );
        console.log( error.status );
        console.log( error.error ); // error message as string
        console.log( error.headers );
      } );
      */
    } );
  }
}
