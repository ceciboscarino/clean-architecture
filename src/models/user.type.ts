export interface User{
    id: string;
    name: string;
}

export const UserEmptyState: User= {
    id: '',
    name: ''
}

export interface ApiUser{
    codigo: string;
    nombre: string;
}

export const ApiUserEmptyState: ApiUser= {
    codigo: '',
    nombre: ''
}
