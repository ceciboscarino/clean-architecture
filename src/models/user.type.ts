import { Roles } from "./roles";

export interface User{
    id: string;
    name: string;
    email?: string;
    rol?: Roles
}

export const UserEmptyState: User= {
    id: '',
    name: '',
    email: '',
    rol: Roles.USER
}

export interface ApiUser{
    codigo: string;
    nombre: string;
}

export const ApiUserEmptyState: ApiUser= {
    codigo: '',
    nombre: ''
}
