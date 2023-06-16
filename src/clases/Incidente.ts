import { Problema } from "./Problema";
import { Tecnico } from "./Tecnico";
import {addDays, format} from 'date-fns';

export class Incidente{
    private problemas: Problema[]
    private tecnico: Tecnico;
    private fechaCreacion: Date;
    private fechaResolucion: Date;
    private estado: Estado;
    


    constructor(problemas: Problema[], fechaCreacion: Date, diasResolucion: number){

        this.problemas = problemas;
        this.fechaCreacion = fechaCreacion;
        this.fechaResolucion = addDays(fechaCreacion, diasResolucion);
        this.estado = Estado.PENDIENTE;
    }



    public getFechaResolucion(){
        return this.fechaResolucion;
    }
}