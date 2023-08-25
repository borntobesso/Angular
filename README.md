# Angular

## Components
`ng generate component [component name]`

`ng g c [component name]`



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
`import { LOCALE_ID } from '@angular/core';`

`import { registerLocaleData } from '@angular/common';`

`import * as fr from '@angular/common/locales/fr';`

`...`

`  providers: [`

`    { provide: LOCALE_ID, useValue: 'fr-FR' }`

`  ],`

`  ...`

`  export class AppModule {`

`  constructor() {`

`    registerLocaleData(fr.default);`

`  }`


`}`
[Docs: Format data based on locale](https://angular.io/guide/i18n-common-format-data-locale)

## Number formatting pipe
- decimal pipe: | number: '[minimum decimal before '.'].[minimum decimal after '.']-[maximum decimal after '.']'
- percentage pipe: | percent: '[minimum decimal before '.'].[minimum decimal after '.']-[maximum decimal]'
- currency pipe: | currency: 'EUR' : 'code'

## refactoring
- Dans une application Angular, AppComponent ne sert généralement qu'aux éléments structuraux principaux. Tout ce qui est plus "spécialisé" va dans un component à part.
	
- Services enable centralising data and logics for the different domains of the application

### create service
- create 'services' folder upder the 'app' folder
- create 'face-snaps.service.ts' in this folder
- a service is always a class
- the @Injectable decorator with the configuration object `@Injectable({providedIn: 'root'})` ensures that this service's instance exists one and only on the app's root and so that the entire application can share the same data
- services are not instanciated in the same way as components are.

### inject service
- services can be accessed within components (dependency injection)
- to the constructor of the component, we give a type of the service as an argument
- as a result, the constructor injects the unique instance of the service registered on the root to the component instance
- now we are initialising the faceSnaps local property with the value of the service's faceSnaps value!

