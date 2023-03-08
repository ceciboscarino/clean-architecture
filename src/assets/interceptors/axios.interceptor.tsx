
import { getValidationError } from '@/Utilities';
import axios, { AxiosRequestConfig } from 'axios';

export const AxiosInterceptor = () => {

    const updateHeader = (request: AxiosRequestConfig) => {
        const token = 123123123123 //localStorage.getItem('token');
        const newHeaders = {
            Authorization: token,
            "Content-Type": "application/json",
        };

        request.headers = newHeaders;
        return request;
    }
        axios.interceptors.request.use(
            (request) => {
                console.log('Starting Request', request);
                //return updateHeader(request);
                return request; 
            });

        axios.interceptors.response.use(
            (response) => {
                console.log('Response:', response);
                return response;
            },
            (error) => {
                //SnackbarUtilities.error(getValidationError(error.code))
                console.log("error:",getValidationError(error.code))
                return Promise.reject(error);
            });
        

      
    }
