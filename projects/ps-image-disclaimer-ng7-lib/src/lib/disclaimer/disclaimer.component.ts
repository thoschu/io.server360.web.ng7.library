import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'pls-tls-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {
  private _name: string;
  private _street: string;
  private _location: string;
  private _tel: string;
  private _fax: string;
  private _email: string;

  constructor() { }

  ngOnInit() {
    this.name = 'PlusServer GmbH';
    this.street = 'Hohenzollernring 72';
    this.location = 'D - 50672 Köln';
    this.tel = '+49 (0) 2203 1045 3000';
    this.fax = '+49 (0) 2203 1045 1045';
    this.email = 'info@plusserver.com';
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get street(): string {
    return this._street;
  }
  set street(street: string) {
    this._street = street;
  }

  get location(): string {
    return this._location;
  }
  set location(location: string) {
    this._location = location;
  }

  get tel(): string {
    return this._tel;
  }
  set tel(tel: string) {
    this._tel = tel;
  }

  get fax(): string {
    return this._fax;
  }
  set fax(fax: string) {
    this._fax = fax;
  }

  get email(): string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }
}
