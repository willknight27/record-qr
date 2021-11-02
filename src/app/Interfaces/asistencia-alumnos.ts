export interface Usuario {

    id: number;
    nombre: string;
    nombreUsuario: string;
    email:string;
    password:string;
    carrera:string;
}


export interface Asistencia {

    fecha: string;
    idCurso: string;
    idUsuario: number;
}

