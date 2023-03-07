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

interface Origin {
    name: string
    url: string
}

export interface ApiUser {
    
        id: number,
        name: string
        status: string
        species: string
        type: string
        gender: string
        origin: Origin,
        location: Origin,
        image: string
        episode: string[],
        url: string
        created: string
      
}
 const ApiUserOrigin={
    name: "",
    url: ""
  }

export const ApiUserEmptyState: ApiUser = {
    id: 2,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: ApiUserOrigin,
    location: ApiUserOrigin,
    image: "",
    episode: [],
    url: "",
    created: ""
  };