//Importando modulos
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CollapsibleModule } from 'angular2-collapsible';
//Importando componentes
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosListarComponent } from './usuarios/usuarios-listar/usuarios-listar.component';
import { UsuariosDetallarComponent } from './usuarios/usuarios-detallar/usuarios-detallar.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { ListadoHotelesComponent } from './hoteles/listado-hoteles/listado-hoteles.component';
import { FiltroHotelesComponent } from './hoteles/filtro-hoteles/filtro-hoteles.component';
//Importando servicios
import { UsuarioService } from './services/usuario.service';
import { HotelService } from './services/hotel.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuariosListarComponent,
    UsuariosDetallarComponent,
    HotelesComponent,
    ListadoHotelesComponent,
    FiltroHotelesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CollapsibleModule
  ],
  providers: [UsuarioService, HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
