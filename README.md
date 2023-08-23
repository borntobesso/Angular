# Angular

## directives ('*' for structures, '[]' for attributes)
- *ngIf
- *ngFor
- [ngStyle]="{ key(style attribute): value }" : it adds an @input() attribute with the same name and bind this attribute at the same time
- [ngClass]="{ key(className): value(condition) }"

## pipes
- | uppercase
- | lowercase
- | titlecase
- | date
- | date: 'medium'
- | date: 'longDate'
- | date: 'longTime'
- | date: 'd MMMM yyyy, à HH:mm'
[Angular date pipe docs](https://angular.io/api/common/DatePipe)

## local configurations
`import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
...
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  ...
  export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}`
[Docs: Format data based on locale](https://angular.io/guide/i18n-common-format-data-locale)

## Number formatting pipe
- decimal pipe: | number: '[minimum decimal before '.'].[minimum decimal after '.']-[maximum decimal after '.']'
- percentage pipe: | percent: '[minimum decimal before '.'].[minimum decimal after '.']-[maximum decimal]'
- currency pipe: | currency: 'EUR' : 'code'