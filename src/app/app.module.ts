import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosListarComponent } from './usuarios/usuarios-listar/usuarios-listar.component';
import { UsuariosDetallarComponent } from './usuarios/usuarios-detallar/usuarios-detallar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuariosListarComponent,
    UsuariosDetallarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
