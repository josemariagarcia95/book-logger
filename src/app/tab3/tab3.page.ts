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
  constructor( private barcodeScanner: BarcodeScanner, private toast: Toast, private bookProvider: BookProviderService ) {}

  click() {
    const optionsBarcodeScanner: BarcodeScannerOptions = {
      showTorchButton: true,
      torchOn: false,
      prompt: 'Coloca el código de barras en el recuadro',
      resultDisplayDuration: 1500,
      formats: 'EAN_13, EAN_8',
    };
    const bookData = this.bookProvider.getBookData( this.isbn );
    console.log( bookData );
    /*
    this.toast.show('Soy un toast de ionic', '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
    */
    /*
    console.log( 'Llamamos a click' );
    this.barcodeScanner
      .scan( optionsBarcodeScanner )
      .then( barcodeData => {
        console.log( 'Data scaned' );
        console.log( 'Barcode data', barcodeData );
        if ( !barcodeData.cancelled ) {
          const bookData = this.bookProvider.getBookData( barcodeData.text );
          console.log( bookData );
        } else {
          this.toast.show( 'Lectura cancelada', '3000', 'bottom' ).subscribe(
            toast => {
              console.log( toast );
            }
          );
        }
      } )
      .catch( err => {
        console.log( 'Error' );
        console.log( 'Error', err );
      } );
      */
  }
}
