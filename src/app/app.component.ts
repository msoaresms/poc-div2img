import { Component } from '@angular/core';
import * as dom2img from 'dom-image';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'div-image';

  public saveImg() {
    dom2img.toBlob(document.getElementById('card')).then((blob) => {
      saveAs.saveAs(blob, 'img.png');
    });
  }
}
