export interface Informacion {
    nombre: string;
    titulo: string;
    sobre_mi: string;
    banner: string;
    avatar: string;
}
export interface Red {
    id_red?: number;
    nombre_red: string;
    link_red: string;
}
export interface Experiencia {
    id_ex?: number;
    trabajo: string;
    empresa_n: string;
    empresa_l?: string;
    inicio_ex: string;
    fin_ex?: string;
    descripcion_ex?: string;
}
export interface Educacion {
    id_ed?: number;
    curso: string;
    institucion_n: string;
    institucion_l?: string;
    inicio_ed: string;
    fin_ed?: string;
    descripcion_ed?: string;
}
export interface Habilidad {
    id_hab?: number;
    skill: string;
    nivel: number;
}
export interface Proyecto {
    id_pr?: number;
    proyecto: string;
    fin_pr: string;
    descripcion_pr: string;
    link?: string;
    fuente: string;
}
