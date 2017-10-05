import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Usuario } from '../../dto/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.css']
})
export class UsuariosListarComponent implements OnInit {

  @Output() seleccionarUsuario: EventEmitter<Usuario> = new EventEmitter();
  lstUsuarios: Usuario[];


  @Input() verDetalle;

usuarioService: UsuarioService;ref:ChangeDetectorRef
  constructor(usuarioService: UsuarioService,ref:ChangeDetectorRef) {
    this.usuarioService = usuarioService;
    this.ref=ref;
//usuarioService.listar().subscribe(
//res =>{
//  this.lstUsuarios = res.json();
//}
//);

    usuarioService.listarPromesa().then(res  => {
      this.lstUsuarios = res.json();
    }).catch(

    );
  }

  ngOnInit() {

  }

  listar(){
    this.usuarioService.listarPromesa().then(res  => {
      this.lstUsuarios = res.json();
    }).catch(

    );
  }

  detallar(usuario: Usuario) {
    this.seleccionarUsuario.emit(usuario);
  }

  eliminar(usuarioEliminar: Usuario) {
    console.log("Eliminar");
    this.usuarioService.eliminar(usuarioEliminar.id).subscribe(
      res => {
        this.listar();
      }
    );


  }

}
