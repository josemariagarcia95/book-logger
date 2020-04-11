import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookData } from 'src/interfaces/book-data/book-data.interface';
import { HTTP } from '@ionic-native/http/ngx';

/**
 * This is the common interface of every BookDataProvider.
 * This class covers all the logic related to retrieving books data
 * from some book repository. Actual book repositories must extend this class
 * and implement their own `getBook` method.
 */
abstract class BookDataProvider {
  /**
   * This class needs two HTTP clients, one for development
   * (`@angular/common/http`) and one for devices (`@ionic-native/http/ngx`) because of CORS issues, and
   * the Ionic `Plaform` plugin to check if we're running in a device or in cordova.
   */
  constructor( protected httpCordova: HttpClient, protected httpNative: HTTP, protected platform: Platform ) {}

  abstract getBook( isbn: string ): Promise < object > ;

  /**
   * Retrieves an HTML page from a book repository.
   * @returns Promise<object> HTML Document
   */
  protected getRequest( url: string, responseType: string = 'document' ): Promise < object > {
    return new Promise( ( resolve, reject ) => {
      // if we're in the development environment (platform -> mobileweb)
      const options: object = { responseType };
      if ( this.platform.is( 'mobileweb' ) ) {
        this.httpCordova.get( url, options ).subscribe( response => {
          // response here is a document, object type
          console.log( 'Got page response in getRequest (angular)' );
          resolve( response );
        }, error => {
          console.log( 'Error in getRequest' );
          console.error( error );
          reject( error );
        } );
        // if we're on device
      } else {
        this.httpNative.get( url, options, {} )
          .then( response => {
            console.log( 'Got page response in getRequest (ionic)' );
            resolve( new DOMParser().parseFromString( response.data, 'text/html' ) );
          } )
          .catch( error => {
            console.log( 'Error in goodreads provider' );
            reject( error );
          } );
      }
    } );
  }
}

@Injectable( {
  providedIn: 'root',
} )
export class GoodReadsProvider extends BookDataProvider {
  constructor( protected httpCordova: HttpClient, protected httpNative: HTTP, protected platform: Platform ) {
    super( httpCordova, httpNative, platform );
  }
  public getBook( isbn: string ): Promise < object > {
    return new Promise( ( resolve, reject ) => {
      const url = `https://www.goodreads.com/search?q=${isbn}`;
      console.log( url );
      this.getRequest( url ).then( data => {
        console.log( data );
        resolve( data );
      } ).catch( error => {
        reject( error );
        console.log( error );
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
