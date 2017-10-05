import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../dto/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'usuarios-detallar',
  templateUrl: './usuarios-detallar.component.html',
  styleUrls: ['./usuarios-detallar.component.css']
})
export class UsuariosDetallarComponent implements OnInit {

  //Servicios
  usuarioService: UsuarioService;

  @Output() listar = new EventEmitter();
  //Atributos
  @Input() usuario: Usuario;

  constructor(usuarioService: UsuarioService) {
    this.usuarioService = usuarioService;
  }

  ngOnInit() {
  }

  guardar() {

    if(this.usuario.id==null){
      this.usuarioService.crear(this.usuario).subscribe(
        res => {
          this.listar.emit();
        }
      );
    }else{
      this.usuarioService.actualizar(this.usuario).subscribe(
        res => {
          this.listar.emit();
        }
      );
    }


  }
}
