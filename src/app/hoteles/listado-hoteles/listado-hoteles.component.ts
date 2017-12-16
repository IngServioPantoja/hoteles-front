import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { HotelDto } from '../../dto/hotelDto';
import { FiltroDto } from '../../dto/filtroDto';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'listado-hoteles',
  templateUrl: './listado-hoteles.component.html',
  styleUrls: ['./listado-hoteles.component.css']
})
export class ListadoHotelesComponent implements OnInit {
  hotelService: HotelService;
  ref: ChangeDetectorRef;

  lstHoteles: HotelDto[];

  constructor(hotelService: HotelService, ref: ChangeDetectorRef) {
    this.hotelService = hotelService;
    this.ref = ref;
    hotelService.listar(new FiltroDto()).then(res => {
      this.lstHoteles = res.json();
    }).catch(

      )
  }

  buscar(filtro:FiltroDto){
    console.log("Buscar listado");
    this.hotelService.listar(filtro).then(res => {
      this.lstHoteles = res.json();
    }).catch(

      )
  }

  ngOnInit() {
  }

}
