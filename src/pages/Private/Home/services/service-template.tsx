import { serviceTemplateAdapter } from "../adapters/service-template.adapter"
import axios from "axios";
import { ApiUser, User } from '@/models/user.type';




export const url = "http://rijjjjujckandmortyapi.com/api/character/2";


export const serviceTemplate = (url: string): Promise<User> => {
   return axios.get<ApiUser>(url)
      .then((res) => (res.data))
      .then((res) => serviceTemplateAdapter(res));
};
