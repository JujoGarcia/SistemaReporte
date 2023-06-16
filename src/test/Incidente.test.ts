import { Incidente } from "../clases/Incidente";
import { Operador } from "../clases/Operador";
import { Problema } from "../clases/Problema";
import { Tecnico } from "../clases/Tecnico"
import { TipoProblema } from "../clases/TipoProblema";
import { EstimacionProblema } from "../clases/estimacionProblema";

test("Crear Incidente", ()=>{
    const tipoAltaSap = new TipoProblema("Alta en SAP", [Especialidad.SAP])
    const estimacionAltaSap = new EstimacionProblema(tipoAltaSap, 3);
    const operador = new Operador([estimacionAltaSap]);


    const sap = Especialidad.SAP;
    const windows = Especialidad.WINDOWS;
    
    const tecnico = new Tecnico("Pedro", [sap, windows]);
    const problemaSap = new Problema("Se rompio el sistema de alta en SAP", tipoAltaSap);




    let incidente = new Incidente([problemaSap], new Date(), 5);

    console.log(incidente.getFechaResolucion());

})