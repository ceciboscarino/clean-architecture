import { ApiUser, Roles, User } from "@/models";


export const serviceTemplateAdapter = (user: ApiUser) : User => {
    //const (id, name) = user
   
    return{
        id: user.status,
        name: user.name,
        email: user.image,
        rol: Roles.ADMIN,
//en caso de q la api y el modelo tengan la misma propiedad se puede usar
//id
    }
}