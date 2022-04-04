export interface Informacion {
    nombre: string;
    titulo: string;
    sobreMi: string;
    banner: string;
    avatar: string;
}
export interface Red {
    idred?: number;
    nombreRed: string;
    linkRed: string;
}
export interface Experiencia {
    idex?: number;
    trabajo: string;
    empresaN: string;
    empresaL?: string;
    inicioEx: string;
    finEx?: string;
    descripcionEx?: string;
}
export interface Educacion {
    ided?: number;
    curso: string;
    institucionN: string;
    institucionL?: string;
    inicioEd: string;
    finEd?: string;
    descripcionEd?: string;
}
export interface Habilidad {
    idhab?: number;
    skill: string;
    nivel: number;
}
export interface Proyecto {
    idpr?: number;
    proyecto: string;
    finPr: string;
    descripcionPr: string;
    link?: string;
    fuente: string;
}
