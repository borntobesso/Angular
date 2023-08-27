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
	import { LOCALE_ID } from '@angular/core';
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
	}
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

## Literal types
`snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void`
- literal types force/limit to use literal strings among the chosen
- numeric literal types also exist
- we can combine literal types with non-literal types
[TypeScript literal types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)

## Single Page Application(SPA)
### Routing
- a routing module enables interpreting URL changes and displaying the right component for every virtual page
- create a file under /app : `app-routing.module.ts`
- constant array of Routes will connect different URLs to the corresponding components.
- a route is an object of type `{ path: '[URL]', component: [compoment name] }`
- register routes into the root of the application using `RouterModule.forRoot()` function
- and then export the configured route module 
- and to register in the app, add the route module in the imports array of `app.module.ts` (which is the principal module of the app)
- in `app.component.html`, rather than static calling of `<app-face-snap-list>` tags, call `<router-outlet>` tags
- By the way if we type the address `localhost:4200/facesnaps` onto the browser bar, the application will be reloaded (new request send to the server)

### Changing from a route to another
1. creating links with special attributes in template
	- Angular directive `routerLink`
	- `routerLinkActive` class for active routers
2. using Angular's Route tool in TypeScript side (programmatic)
	- create a button and add `(click)=[method]` in it
	- inject a router into the landing pade component and use its `navigateByUrl()` function

### Activate routes with ActivatedRoute
- we can create a route with a dynamic parameter (ex. id)
- to get the information of the activated route, we need to inject ActivatedRoute in the component
- then we extract the id parameter of the route, and use the service to get the corresponding component. `+this.route.snapshot.params['id'];` (typecasting from string to number, as all the parameters from route is strign type)