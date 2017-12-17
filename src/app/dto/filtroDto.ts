import { EstrellaDto } from '../dto/estrellaDto';
class FiltroDto {
    nombre: string;
    estrellas: EstrellaDto[];

    toParams(){
      var parametros = "";
    }
}

export { FiltroDto };
