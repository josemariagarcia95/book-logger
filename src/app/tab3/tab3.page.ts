import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { BookProviderService } from '../services/book-provider.service';
import { BookData } from 'src/interfaces/book-data/book-data.interface';

@Component( {
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: [ 'tab3.page.scss' ]
} )
export class Tab3Page {
  private isbn = '9780062845511';
  showList = false;
  result = '';
  constructor( private barcodeScanner: BarcodeScanner, private toast: Toast, private bookProvider: BookProviderService ) {}

  click() {
    const optionsBarcodeScanner: BarcodeScannerOptions = {
      showTorchButton: true,
      torchOn: false,
      prompt: 'Coloca el código de barras en el recuadro',
      resultDisplayDuration: 1500,
      formats: 'EAN_13, EAN_8',
    };
    this.result = '';
    this.showList = true;
    const bookData = this.bookProvider.getBookData( this.isbn );
    bookData.then( data => {
      console.log( 'this is the then in tab3' );
      console.log( data );
      this.showList = true;
      // this.result = data.toString();
    } ).catch( error => {
      console.log( error );
      this.showList = true;
      this.result = 'Status: ' + error.statusText + ' - ' + error.message;
    } );
  }
}
