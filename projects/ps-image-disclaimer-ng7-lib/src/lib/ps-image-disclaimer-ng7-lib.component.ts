import {Component, OnInit, Input} from '@angular/core';

import {add, divide, multiply} from 'ramda';

@Component({
  selector: 'pls-tls-ps-image-disclaimer-ng7-lib',
  template: `
    <img [src]="address" [alt]="alt" [width]="width">
    <pls-tls-disclaimer></pls-tls-disclaimer>
  `,
  styles: [
    `
      img {
        object-fit: contain;
      }
    `
  ]
})
export class PsImageDisclaimerNg7LibComponent implements OnInit {
  private _address: string;
  private _alt: string;
  protected _width: number;

  @Input() public diagonal: number;

  constructor() {
    this.address = 'https://www.plusserver.com/templates/images/news/pic-345x200-plus-pm-bc-partners.jpg';
    this.alt = 'plusserver-image';
  }

  private static calcHypotenuse(a, b): number {
    return Math.sqrt(add((multiply(a, a)), multiply(b, b)));
  }

  private static calcAngle(opposite, hypotenuse): number {
    return Math.asin(divide(opposite, hypotenuse));
  }

  private static calcImageWidth(sinusAlpha, hypotenuse): number {
    return multiply(Math.cos(sinusAlpha), hypotenuse);
  }

  ngOnInit() {
    const width: Number = 2363,
      height: Number = 1182,
      hypotenuse: number = PsImageDisclaimerNg7LibComponent.calcHypotenuse(width, height),
      sinusAlpha: number = PsImageDisclaimerNg7LibComponent.calcAngle(height, hypotenuse);

    this.width = PsImageDisclaimerNg7LibComponent.calcImageWidth(sinusAlpha, this.diagonal);
  }

  get address(): string {
    return this._address;
  }
  set address(address: string) {
    this._address = address;
  }

  get alt(): string {
    return this._alt;
  }
  set alt(alt: string) {
    this._alt = alt;
  }

  get width(): number {
    return this._width;
  }
  set width(width: number) {
    this._width = width;
  }
}
