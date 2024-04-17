import { Component, OnInit } from '@angular/core';

import { ConsultaService } from '../consulta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
})
export class ProductoDetalleComponent  implements OnInit {

  constructor(private consulta: ConsultaService, private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.realizarConsulta(this.idProducto);
  }

  idProducto: string = this.ruta.snapshot.params['id'];

  producto: any = {};

  realizarConsulta(idProducto: string): void{
    this.consulta.getProductosDetalle( idProducto ).subscribe(res => {
      this.producto = res;
    })
  }
}
