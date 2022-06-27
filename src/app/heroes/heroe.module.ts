import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
//* Las declaraciones funcionan para deicrla a anguar que componentenes constituyen todo este modulo
    declarations: [
      ListadoComponent,
      HeroeComponent
    ],
//* Las exportaciones es lo que queremos hacer visible fuera del modulo.
    exports: [
      ListadoComponent,
      HeroeComponent
    ],

    imports: [
      CommonModule
    ]

})
export class HeroeModule {}
