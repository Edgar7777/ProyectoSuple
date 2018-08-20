import {Laser} from './Laser';
export class Usuario{
    id:number;
    nombre:string;
    apellido:string;
    contrasenia:string;
    email ?: string;
    telefono:string;
    lasers:Laser[];
}
