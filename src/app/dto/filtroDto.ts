import { EstrellaDto } from '../dto/estrellaDto';
class FiltroDto {
    nombre: string;
    estrellas: EstrellaDto[];

    toParams(){
      var parametros = "";
      if(this.nombre!=undefined && this.nombre!=""){
        parametros = "?name="+this.nombre;
      }
      var estrellasParam = "";
      if(this.estrellas!=undefined){
        for (let estrella of this.estrellas) {
          if(estrella.activo && estrella.cantidad!="TODAS"){
            if(estrellasParam!=""){
              estrellasParam = estrellasParam+","+estrella.cantidad;
            }else{
              estrellasParam = estrella.cantidad;
            }
          }
        }
      }
      if(estrellasParam!=""){
        if(parametros==""){
          parametros = parametros +"?stars="+estrellasParam;
        }else{
          parametros = parametros +"&stars="+estrellasParam;
        }
      }
      return parametros;
    }
}

export { FiltroDto };
