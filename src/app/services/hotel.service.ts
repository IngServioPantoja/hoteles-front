import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HotelDto } from '../dto/hotelDto';
import { FiltroDto } from '../dto/filtroDto';
import { environment } from '../../environments/environment';

@Injectable()
export class HotelService {
  private baseUrl: string = environment.serviceUrl + 'hoteles';

  constructor(private http: Http) {
  }
  listar(filtro: FiltroDto): Promise<any> {
    console.log("listar hoteles service");
    return this.http.get(this.baseUrl + filtro.toParams()).toPromise();
  };
  crear(hotelDto: HotelDto): Observable<Response> {
    return this.http.post(this.baseUrl, hotelDto);
  };
  actualizar(hotelDto: HotelDto): Observable<Response> {
    return this.http.put(this.baseUrl + "/" + hotelDto.id, hotelDto);
  };
  eliminar(id: number): Observable<Response> {
    return this.http.delete(this.baseUrl + "/" + id);
  };

}
