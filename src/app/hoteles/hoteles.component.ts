import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, ViewChild } from '@angular/core';
import { HotelDto } from '../dto/hotelDto';
import { FiltroDto } from '../dto/filtroDto';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {

  ref: ChangeDetectorRef;
  @ViewChild('filtro') filtro;
  @ViewChild('listado') listado;
  constructor(ref: ChangeDetectorRef) {
    this.ref = ref;

  }

  buscar(filtro:FiltroDto) {
    console.log("buscando el filtrico");
    this.listado.buscar(filtro);
  }

  ngOnInit() {
  }

}
