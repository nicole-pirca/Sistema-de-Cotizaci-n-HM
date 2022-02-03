export class Cotizador {
    constructor(
        public tipoEvento: string,
        public lugaEvento: string,
        public fechaEvento: string,
        public numPersonas: number,
        public nombre: string,
        public telefono: string,
        public correo: string,
        public cuidad: string,
        public mensaje: string,
        public createdAt?: number,
        
        public updatedAt?: number,

        public id?: number,
    ) {
    }
}