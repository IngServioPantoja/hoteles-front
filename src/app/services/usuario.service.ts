import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Usuario } from '../dto/usuario';

@Injectable()
export class UsuarioService {
  private baseUrl: string = 'http://localhost:8080/angular-integration/usuarios';

  constructor(private http: Http) {
  }
  listar(): Observable<Response> {
    return this.http.get(this.baseUrl);
  }
  listarPromesa(): Promise<any> {
    return this.http.get(this.baseUrl).toPromise();
  };
  crear(usuario:Usuario): Observable<Response> {
    return this.http.post(this.baseUrl,usuario);
  };
  actualizar(usuario:Usuario): Observable<Response> {
    return this.http.put(this.baseUrl+ "/"+usuario.id,usuario);
  };
  eliminar(id:number): Observable<Response> {
    return this.http.delete(this.baseUrl+ "/"+id);
  };

}
