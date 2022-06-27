
/**
 * !  Clase de Crear componente de forma automatica
 *
 * *  en la consola, escribimos el comando:
 * ?  ng generate component <carpeta/nombreDelArchivo> o podemos hacer ng g c <carpeta/nombreDelArchivo?
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit {

  /**
   * !  Clase de *ngFor
   * *  Vamos a iniciar con un array de string llamado heroe mf.y nos vamos a ir de frente al
   * *  listado HTML lets dooooooo iiit
   */
  heroes:string[] = ['spiderman', 'ironman', 'hulk', 'thor']
  heroe_borrado :string ='';

  constructor() {
    console.log('constructor')
   }

//* 👇🏻 este es el ciclo de vida del producto, basicamente corre desde que se renderiza la pagina, pero el que corre primero siempre es el constructor
  ngOnInit(): void {
    console.log('ngOninit')
  }

//* incluso antes de que exista una instancia de la clase, el constructor ya corrio y sabe lo que tiene que pedir
//* posteriormente el init hace su jale, aqui se pueden hacer peticiones a un servicio o cosas por el estilo que se
//* ocupan desde que se renderiza la pag.

//? TAREA.      Borrando al heroe, vamos a crear un metodo para borrar a un heroe del array

  borrarHeroe(){

//?   Esto es porque shift retorna un 👇🏻 string o un undefined, poreso en lugar de que retorne el string o el undefide, que retorne el string o un string vacio
   this.heroe_borrado= this.heroes.shift() || '';
   console.log('borrando...', this.heroe_borrado)


  }

}
