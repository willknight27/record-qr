export interface Usuario {

    id: number;
    nombre: string;
    nombreUsuario: string;
    email:string;
    password:string;
    carrera:string;
    rut:string;
}


export interface Asistencia {

    fecha: string;
    idCurso: string;
    idUsuario: number;
}

export interface QrJSON {

    idAsignatura:string;
    seccion:string;
    asignatura:string;
    docente:string;
    correo:string;

}

export interface Email {

    to:string;
    cc:string;
    subject:string;
    body:string;
    isHtml:boolean;
    app:string;

}