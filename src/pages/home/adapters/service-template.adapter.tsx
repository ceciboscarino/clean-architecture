import { ApiUser, User } from "@/models";


export const serviceTemplateAdapter = (user: ApiUser) : User => {
    //const (id, name) = user
    return{
    id: user.codigo,
    name: user.nombre
//en caso de q la api y el modelo tengan la misma propiedad se puede usar
//id
    }
}