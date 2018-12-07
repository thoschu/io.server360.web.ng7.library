# [PlusServer GmbH ](https://www.plusserver.com) Image - Module and Component

## Getting started

First, install it.

```bash
npm i ps-image-disclaimer-ng7-lib --save
```

Then, import it into your `@NgModule`:

```typescript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PsImageDisclaimerNg7LibComponent} from 'ps-image-disclaimer-ng7-lib';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PsImageDisclaimerNg7LibComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
or:
```typescript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PsImageDisclaimerNg7LibModule} from 'ps-image-disclaimer-ng7-lib';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PsImageDisclaimerNg7LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then, use it in your markup:
```html
<ul>
  <li>
    <pls-tls-ps-image-disclaimer-ng7-lib [diagonal]="250"></pls-tls-ps-image-disclaimer-ng7-lib>
  </li>
  <li>
    <pls-tls-ps-image-disclaimer-ng7-lib [diagonal]="500"></pls-tls-ps-image-disclaimer-ng7-lib>
  </li>
  <li>
    <pls-tls-ps-image-disclaimer-ng7-lib [diagonal]="750"></pls-tls-ps-image-disclaimer-ng7-lib>
  </li>
</ul>
```

![tag example](http://i63.tinypic.com/2aenybn.jpg)
