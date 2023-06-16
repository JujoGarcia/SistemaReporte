import { TipoProblema } from './TipoProblema';
export class Problema{
    descripcion: String;
    tipoProblema: TipoProblema;
    estado: Estado;


    constructor(descripcion: String, tipoProblema: TipoProblema){
        this.descripcion = descripcion;
        this.tipoProblema = tipoProblema;
        this.estado = Estado.PENDIENTE;
    }
}