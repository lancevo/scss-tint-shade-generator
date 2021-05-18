import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Output
} from '@angular/core';

@Directive({
  selector: '[getBackgroundColor]'
})
export class GetBackgroundColorDirective implements AfterViewInit {
  @Output() bgColor = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const rgb = getComputedStyle(
      this.elementRef.nativeElement
    ).getPropertyValue('background-color');

    const hexColor =
      '#' +
      rgb
        .match(/\d+, \d+, \d+/)[0]
        .split(',')
        .map(n => {
          let hex = parseInt(n, 10).toString(16);
          if (hex.length < 2) {
            hex = '0' + hex;
          }
          return hex;
        })
        .join('');

    this.bgColor.emit(hexColor);
  }
}
