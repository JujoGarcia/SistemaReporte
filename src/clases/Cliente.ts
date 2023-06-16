export class Cliente{
    private nombre: String;
    private razonSocial: String;
    private cuit: number;
    private servicios: Servicio[];


    constructor(nombre: String, razonSocial: String, cuit: number){
        this.nombre = nombre;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
        this.servicios = []
    }
}