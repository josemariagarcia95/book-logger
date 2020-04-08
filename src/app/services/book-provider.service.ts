import { Injectable } from '@angular/core';
import { BookData } from 'src/interfaces/book-data/book-data.interface';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable( {
  providedIn: 'root'
} )
export class BookProviderService {
  private bookQueryUrls: ( isbn: string ) => [ Function, string ][] =
    ( isbn: string ) => {
      return [
        [ , `https://www.abebooks.com/servlet/SearchResults?sts=t&cm_sp=SearchF-_-home-_-Results&isbn=${isbn}` ],
        [ , `https://www.bookdepository.com/es/search?searchTerm=${isbn}&search=Find+book` ],
        [ , `https://www.amazon.es/s?k=${isbn}&i=stripbooks` ],
        [ , `https://www.goodreads.com/search?q=${isbn}` ]
      ];
    }
  constructor( private http: HTTP ) {}

  getBookData( bookISBN: string ): Promise < BookData > {
    return new Promise( ( resolve, reject ) => {
      const url = bookQueryUrls( bookISBN );
      resolve( {
        isbn: 'string',
        title: 'string',
        synopsis: 'string',
        editor: 'string'
      } );
    } );
  }
}
