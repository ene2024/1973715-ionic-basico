import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular' ;
import { alumno } from '../modules/alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  alumnos: alumno[] = [] // ["Carlos", "Ximena", "Alberto", "Eduardo", "Barbara", "Georgina", "Kevin"];
  result: string = '';

  ngOnInit() {}

  constructor(private actionSheetController: ActionSheetController) { }
  
  nuevoAlumno: alumno = {
    nombre: '',
    presente: false 
  }

  agregaAlumno(): void {
    this.alumnos.push(this.nuevoAlumno);

    this.nuevoAlumno = {
      nombre: '',
      presente: false
    }
  }

  
}
