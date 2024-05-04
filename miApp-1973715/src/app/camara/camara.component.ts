import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from '../modules/foto.model';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {

  public fotos: Foto[] = this.FotoService.fotos;

  constructor(public FotoService: FotoServiceService) { }

  ngOnInit() {}

  tomarFoto() {
    this.FotoService.addNewToGallery();
  }

}
