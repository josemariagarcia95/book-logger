import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { IonApp } from '@ionic/angular';

@Component( {
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: [ 'tab3.page.scss' ]
} )
export class Tab3Page {
  constructor( private barcodeScanner: BarcodeScanner ) {}

  click( ) {
    const optionsBarcodeScanner: BarcodeScannerOptions = {
      preferFrontCamera: true,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'QR_CODE,PDF_417 ',
      orientation: 'landscape',
    };
    console.log( 'Llego a cambiar los estilos' );
    // First try -add 'transparent none !important' backgrounds styles on ion-content, app-tabs, 
    // app-root, ion-app, ion-content and body - Doesn't work, neither on emulator or device
    const ionContent = document.querySelector('ion-content') as HTMLElement;
    ionContent.classList.add('has-camera');
    const appTabs = document.querySelector( 'app-tabs' ) as HTMLElement;
    appTabs.classList.add( 'has-camera' );
    const appRoot = document.querySelector( 'app-root' ) as HTMLElement;
    appRoot.classList.add( 'has-camera' );
    const ionApp = document.querySelector( 'ion-app' ) as HTMLElement;
    ionApp.classList.add( 'has-camera' );
    const body = document.querySelector( 'body' ) as HTMLElement;
    body.classList.add( 'has-camera' );
    /*
    */
    //ionApp.style['z-index'] = -1000;
    //const appRoot = document.querySelector('app-root') as HTMLElement;
    //appRoot.style['z-index'] = -1000;
    //window.document.body.style.background = 'transparent';
    //const appRoot = window.document.querySelector('app-root') as HTMLElement;
    //appRoot.style.background = 'transparent';

    //const ionApp = window.document.querySelector('ion-app') as HTMLElement;
    //ionApp.style.background = 'transparent';

    console.log( 'Llamamos a click' );
    this.barcodeScanner
      .scan( optionsBarcodeScanner )
      .then( barcodeData => {
        console.log( 'Data scaned' );
        console.log( 'Barcode data', barcodeData );
      } )
      .catch( err => {
        console.log( 'Error' );
        console.log( 'Error', err );
      } );
  }
}
