import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../dto/usuario';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @ViewChild('ul') ul;
  @ViewChild('ud') ud;
  
  verDetalle = false;
  usuario = { id: null, nombre: null, apellido: null };

  constructor() { }

  ngOnInit() {
  }

  //Metodos propios
  seleccionarUsuario(usuario: Usuario) {
    console.log("UsuariosComponent seleccionarUsuario");
    this.usuario = usuario;
    this.verDetalle = true;
  }

  listar() {
    console.log("UsuariosComponent listar");
    this.ul.listar();
    this.verDetalle = false;
  }
  nuevo() {
    this.verDetalle = true;
    this.usuario = new Usuario();
  }

  guardado() {
    console.log("UsuariosComponent guardar");
    this.verDetalle = false;
  }

}
