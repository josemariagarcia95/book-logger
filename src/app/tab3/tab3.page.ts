import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Toast } from '@ionic-native/toast/ngx';

@Component( {
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: [ 'tab3.page.scss' ]
} )
export class Tab3Page {
  constructor( private barcodeScanner: BarcodeScanner, private toast: Toast ) {}

  click( ) {
    const optionsBarcodeScanner: BarcodeScannerOptions = {
      showTorchButton: true,
      torchOn: false,
      prompt: 'Coloca código de barras en el recuadro',
      resultDisplayDuration: 500,
      formats: 'EAN_13, EAN_8',
    };
    console.log( 'Llego a cambiar los estilos' );
    // First try -add 'transparent none !important' backgrounds styles on ion-content, app-tabs, 
    // app-root, ion-app, ion-content and body - Doesn't work, neither on emulator or device
    // Second try, set a low z-index value so the interface goes to the background in ion-app. app-tabs,
    // ion-tabs, app-tabs3 and ion-content - Doesn't work
    // Third try - Use the capacitor plugin instead of the cordova one
    this.toast.show('Soy un toast de ionic', '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
    console.log( 'Llamamos a click' );
    /*
    this.barcodeScanner
      .scan( optionsBarcodeScanner )
      .then( barcodeData => {
        console.log( 'Data scaned' );
        console.log( 'Barcode data', barcodeData );
        
          Object {
            text: numero del codigo de barras
            format: tipo codigo barras
            cancelled: bool
          }
        
      } )
      .catch( err => {
        console.log( 'Error' );
        console.log( 'Error', err );
      } );
      */
  }
}
