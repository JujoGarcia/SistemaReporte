import { EstimacionProblema } from "./estimacionProblema";

export class Operador{
    private tiemposProblemas: EstimacionProblema[];


    constructor(tiemposProblemas: EstimacionProblema[]){
        this.tiemposProblemas = tiemposProblemas;
    }
}