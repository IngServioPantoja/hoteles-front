import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nueva = true;
  showForm = false;
  nota = { id: null, titulo: null, descripcion: null }
  my_notes = [
    { id: 1, descripcion: "descripcion 1", titulo: "Titulo 1" },
    { id: 2, descripcion: "descripcion 2", titulo: "Titulo 2" },
    { id: 3, descripcion: "descripcion 3", titulo: "Titulo 3" },
    { id: 4, descripcion: "descripcion 4", titulo: "Titulo 4" }
  ];

  addNote() {
    this.showForm = true;
    this.nueva = true;
    this.nota = { id: null, titulo: null, descripcion: null };
  };

  cancel() {
    this.showForm = false;
  };

  guardarNota() {
    var global = this;
    if (this.nueva) {
      this.nota.id = Date.now();
      this.my_notes.push(this.nota);
    } else {
      this.my_notes.forEach(function(nota, index) {
        if (nota.id === global.nota.id) {
          global.my_notes[index] = global.nota;
        };
      });
    }
    this.showForm = false;
    this.nota = { id: null, titulo: null, descripcion: null };
  };

  verNota(nota) {
    this.nueva = false;
    this.showForm = true;
    this.nota = nota;
  };

  eliminarNota() {
    var global = this;
    this.my_notes.forEach(function(nota, index) {
      if (nota.id === global.nota.id) {
        global.my_notes.splice(index, 1);
      };
    });
    this.showForm = false;
  };
}
