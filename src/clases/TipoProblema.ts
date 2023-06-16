export class TipoProblema{
    private nombre: String;
    private especialidades: Especialidad[];


    constructor(nombre: String, especialidades: Especialidad[]){
        this.nombre = nombre;
        this.especialidades = especialidades;
    }
}