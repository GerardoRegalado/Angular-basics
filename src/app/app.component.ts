import { Component } from '@angular/core';

/**
 * !  Este es un componente, se carga en
 * !  el html padre, osea en el index.html
 * !  donde se renderiza toda la pagina
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //?👇🏻              👇🏻 se sigue respetando el tipo de dato
  public titulo:string = 'Contador app';
  public numero:number = 10
  public base:number = 5

//* estos son los metodos que se usan en angular
//* puede que funcionen como funciones de JS

//* ojo man, si esto lo vas a utilizar como un evento
//*entonces debes de pasarle en el html el tipo de dato
//*que esta solicitando
  acumular( valor: number) {
    this.numero += valor
  }


  }


