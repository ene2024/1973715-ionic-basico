import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular' ;

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  alumnos: any[] = ["Carlos", "Ximena", "Alberto", "Eduardo", "Barbara", "Georgina", "Kevin"];
  ngOnInit() {}

  constructor(private actionSheetController: ActionSheetController) { }
  
  async showDeleteAction(alumno: string) {
    const actionSheet = await this.actionSheetController.create({
        header: 'Acciones',
        buttons: [
          {
            text: 'Eliminar',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]
    });


    await actionSheet.present();
  }
}
