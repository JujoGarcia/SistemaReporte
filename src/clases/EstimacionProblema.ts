import { TipoProblema } from "./TipoProblema";

export class EstimacionProblema{
    private tipo: TipoProblema;
    private tiempoEstimacionDias: number;


    constructor(tipo: TipoProblema, dias: number){
        this.tipo = tipo;
        this.tiempoEstimacionDias = dias;
    }
}