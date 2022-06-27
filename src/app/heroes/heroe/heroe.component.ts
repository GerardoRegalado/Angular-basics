/**
 * !  Clase de componente Heroe y separacion de componentes
 */

//! En esta clase vimos como hacer el componente heroe, hicimos la carpeta y los archivos
//! ademas, llenamos el heroe.component.ts 👇🏻 e importamos el selector al app.component.html para
//! que pudiera ser leido, ademas agregamos unas lineas al html para que se mostrara en el navegador.
//! y pues nada banda.

/**
 * ?  Hemos estado viendo como importar los componentes dentro del app component html para pues, obvio crear
 * ?  componentes y renderizarlos todos en la app, esta cool
 */

/**
 * *  tambien hemos utilizado los decoradores de component donde nos pide tres cosas:
 * *  SELECTOR:   Nos pide el nombre del selector que se usara para invocar el componente en otros sitios, como el app principal
 * *  Template || templateURL:  es el archivo HTML que se renderizara o, si es un html chiquito se puede escribir aqui mismo
 * *  styleUrls:  es la pagina de estilos que se aplicara al html
 */


import { Component } from "@angular/core";


@Component({
  selector:       'app-heroe',
  templateUrl:    './heroe.component.html',
  styleUrls:      ['./heroe.component.css']
})

export class HeroeComponent{

/**
 * !  Clase de template de componente:
 * *  En esta clase vimos como podemos hacer metodos
 * *  e imprimir sus valores en el html, existen varias
 * *  facilidades en angular que te permiten hacer los metodos
 * *  en el HTML, pero lo mejor es hacerlos en el componente y en
 * *  el HTML solo dejar la maquetacion.
 */


//?   Vamos hacer dos variables, nombre y edad
    nombre  :string ='ironman';
    edad    :number =45

/**
 * *  Vamos hacer un metodo que retorna un string
 * *  pero ojo, tenemos que juntar el string con
 * *  el nombre para regresar el string resultado
 *
 */
    obtenerNombre(): string {

//? bueno, estas 👇🏻 comillas del poder te ayudan a concatenar diferentes tipos de dato
      return `${this.nombre} - ${this.edad}`
    }


/**
 * *  esta es una de los metodos que hablabamos arriba, que se pueden hacer
 * *  en el html, dentro de la hoja html tu puedes hacer lo siguiente:
 * ?  <span> {{ nombre.toUpperCase() }}
 * *  y funcionaria, pero lo correcto y las buenas practicas es dejarlo de este lado.
 */
    get nombreCapitalizado():string {
      return this.nombre.toUpperCase()
    }

    cambiarNombre():void{

      this.nombre = 'spiderman';
    }

    cambiarEdad():void{
      this.edad = 19;
    }

}
