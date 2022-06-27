import { Component } from "@angular/core";

//? 👇🏻 este es el decorador que indica que es un componente, y pide el nombre del selector, el template y la hoja de estilos
@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <button (click)="acumular(base)" > +1 </button>
        <span> {{numero}} </span>
        <button (click)="acumular(-base)"> -1 </button>
`

})


export class ContadorComponent{

   //?👇🏻              👇🏻 se sigue respetando el tipo de dato
   public titulo:string = 'Contador app';
   public numero:number = 10
   public base:number = 5

   acumular( valor: number) {
     this.numero += valor
   }


   }

