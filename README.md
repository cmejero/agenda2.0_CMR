# Agenda20Cmr

Esta aplicación tiene un menu compuesto de 2 opciones, uno para realizar las acciones (añadir y buscar) y otro para mostrar el listado contactos (y eliminar), ambos son componente hijo de app.component.

Acciones: 
Añadir--> el botón esta formado por un componente hijo el cual muestra un formulario para añadir un nuevo contacto.
Buscar--> el botón esta formado por un componente hijo el cual muestra un input para la intruduccion del nick y busqueda del contacto en especifico.

Listado de contactos:
contactos--> muestra el listado de todos los contactos que tenemos guardado en la base de datos.
ficha-contactos--> componente hijo de contactos, que forma y muestra una ficha individual con los datos de un contacto. Tambien muestra en la ficha un boton que sirve para eliminar el contacto mediante un id.

Modelos: 
contacto--> Interfaz del objeto contacto con la estructura de todos sus campos.

Servicios:
http.service--> se encarga de la conexion a la base de datos y de los metodos CRUD.
contactos.service--> crea un array vacio del objeto/modelo contacto.

db.json: servidor JSON que hace la funcion de base de datos.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
