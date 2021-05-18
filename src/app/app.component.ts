import { ChangeDetectorRef, Component, VERSION } from '@angular/core';
import { shade, tint } from './colors';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  baseColor = '008cdb';

  scssColors = {
    shade5: '',
    shade4: '',
    shade3: '',
    shade2: '',
    shade1: '',
    tint1: '',
    tint2: '',
    tint3: '',
    tint4: '',
    tint5: ''
  };

  constructor(private ref: ChangeDetectorRef) {}

  shade(i) {
    return shade(this.baseColor, i * 10);
  }

  tint(i) {
    return tint(this.baseColor, i * 10);
  }

  setColorsObject(hex: string, prop) {
    this.scssColors[prop] = hex;
    console.log('gcv', prop, hex);
    this.ref.detectChanges();
  }
}
