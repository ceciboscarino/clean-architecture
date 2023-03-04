export interface User{
    id: string;
    name: string;
    email?: string;
}

export const UserEmptyState: User= {
    id: '',
    name: '',
    email: ''
}

export interface ApiUser{
    codigo: string;
    nombre: string;
}

export const ApiUserEmptyState: ApiUser= {
    codigo: '',
    nombre: ''
}
