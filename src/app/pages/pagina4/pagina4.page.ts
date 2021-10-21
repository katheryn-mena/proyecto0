import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.page.html',
  styleUrls: ['./pagina4.page.scss'],
})
export class Pagina4Page implements OnInit {

  qrData = "https://www.google.cl";
  elementType: 'url' | 'img' | 'canvas' = 'canvas';

  constructor(private barCodeScanner: BarcodeScanner, private base64ToGallery: Base64ToGallery) { }

  ngOnInit() {
  }

}
