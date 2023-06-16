import { Incidente } from "./Incidente";

export class Tecnico{
    private nombre: String;
    private especialidades: Especialidad[];
    private incidentes: Incidente[];


    constructor(nombre: String, especialidades: Especialidad[]){
        this.nombre = nombre;
        this.especialidades = especialidades;
        this.incidentes = [];
    }
}