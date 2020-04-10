import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookData } from 'src/interfaces/book-data/book-data.interface';
import { HTTP } from '@ionic-native/http/ngx';

abstract class BookDataProvider {
  constructor( protected http: HttpClient, protected httpNative: HTTP ) {}
  abstract getBook( isbn: string ): Promise < object > ;
}

@Injectable( {
  providedIn: 'root',
} )
export class GoodReadsProvider extends BookDataProvider {
  constructor( protected http: HttpClient, protected httpNative: HTTP ) {
    super( http, httpNative );
  }
  public getBook( isbn: string ): Promise < object > {
    return new Promise( ( resolve, reject ) => {
      const url = `https://www.goodreads.com/search?q=${isbn}`;
      this.httpNative.get( url, {}, {} )
        .then( data => {
          console.log( 'Data in goodreads provider' );
          resolve( data );
        } )
        .catch( error => {
          console.log( 'Error in goodreads provider' );
          reject( error );
        } );
      // url, parameters, headers
      /*
      this.http.get( url, {} ).subscribe( response => {
        console.log( 'Data in goodreads provider' );
        resolve( response );
      }, error => {
        console.log( 'Error in goodreads provider' );
        reject( error );
      } );
      */


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
