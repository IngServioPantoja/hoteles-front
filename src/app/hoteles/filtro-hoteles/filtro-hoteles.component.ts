import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FiltroDto } from '../../dto/filtroDto';
import { EstrellaDto } from '../../dto/estrellaDto';

@Component({
  selector: 'filtro-hoteles',
  templateUrl: './filtro-hoteles.component.html',
  styleUrls: ['./filtro-hoteles.component.css']
})
export class FiltroHotelesComponent implements OnInit {

  @Output() buscar = new EventEmitter();
  @Input() filtro: FiltroDto;

  constructor() {

    this.filtro = new FiltroDto();
    this.filtro.estrellas = [
      { cantidad: "TODAS", activo: false },
      { cantidad: "5", activo: false },
      { cantidad: "4", activo: false },
      { cantidad: "3", activo: false },
      { cantidad: "2", activo: false },
      { cantidad: "1", activo: false }
    ]
  }
  listado(valor: number) {
    console.log("Tamaño del array " + valor);
    return new Array(valor);
  }
  cambiarEstrellas(valor: EstrellaDto) {
    if (valor.activo == false) {
        for (let estrella of this.filtro.estrellas) {
          estrella.activo = true;
        }
    }else{
      for (let estrella of this.filtro.estrellas) {
        estrella.activo = false;
      }
    }
  }

  buscarHoteles(){
    console.log("Buscando Hoteles");
    this.buscar.emit(this.filtro);
  }

  ngOnInit() {
  }

}
