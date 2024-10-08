import axios, { AxiosResponse } from "axios";
import AbstractService from "../utils/abstract-service";
import { API_URL } from "@env";


export default class CustomerService extends AbstractService {
    public urlBase: string = API_URL + '/customer';

    async get(path?: string): Promise<any> {
        try {
            const response = await axios.get(this.urlBase );
            return response;
        } catch(error: any) {
            if (axios.isAxiosError(error)) {
                // Erro causado por Axios (problema de rede, servidor, etc.)
                // console.log('Axios error message: ', error.message);
                if (error.response) {
                    // O servidor retornou uma resposta com status de erro
                    // console.log('Response status: ', error.response.status);
                    // console.log('Response data: ', error.response.data);
                    throw error;
                } else if (error.request) {
                    // Nenhuma resposta foi recebida após o envio da requisição
                    // console.log('Request was made but no response received: ', error.request);
                    throw error;
                } else {
                    // Outro erro aconteceu ao preparar a requisição
                    // console.error('Error setting up request: ', error.message);
                    throw error;
                }
            } else {
                throw Error('Erro inesperado.')
                // console.log('Unexpected error in Authentication: ', error);
            }
        }
    }
    async getById(id: string, path?: string): Promise<any> {
        try {
            const response = await axios.get(this.urlBase + `/${id}`);
            return response;
        } catch(error: any) {
            if (axios.isAxiosError(error)) {
                // Erro causado por Axios (problema de rede, servidor, etc.)
                // console.log('Axios error message: ', error.message);
                if (error.response) {
                    // O servidor retornou uma resposta com status de erro
                    // console.log('Response status: ', error.response.status);
                    // console.log('Response data: ', error.response.data);
                    throw error;
                } else if (error.request) {
                    // Nenhuma resposta foi recebida após o envio da requisição
                    // console.log('Request was made but no response received: ', error.request);
                    throw error;
                } else {
                    // Outro erro aconteceu ao preparar a requisição
                    // console.error('Error setting up request: ', error.message);
                    throw error;
                }
            } else {
                throw Error('Erro inesperado.')
                // console.log('Unexpected error in Authentication: ', error);
            }
        }
    }
    async getByName(name: string, path?: string){
        try {
            const response = await axios.get(this.urlBase + (path || '') + `/${name}`);
            return response;
        } catch(error: any) {
            if (axios.isAxiosError(error)) {
                // Erro causado por Axios (problema de rede, servidor, etc.)
                // console.log('Axios error message: ', error.message);
                if (error.response) {
                    // O servidor retornou uma resposta com status de erro
                    // console.log('Response status: ', error.response.status);
                    // console.log('Response data: ', error.response.data);
                    throw error;
                } else if (error.request) {
                    // Nenhuma resposta foi recebida após o envio da requisição
                    // console.log('Request was made but no response received: ', error.request);
                    throw error;
                } else {
                    // Outro erro aconteceu ao preparar a requisição
                    // console.error('Error setting up request: ', error.message);
                    throw error;
                }
            } else {
                throw Error('Erro inesperado.')
                // console.log('Unexpected error in Authentication: ', error);
            }
        }
    }
    async register(object: any, path?: string): Promise<any> {
        console.log(this.urlBase)
        try {
            const response = await axios.post(this.urlBase, object);
            return response;
        } catch(error: any) {
            if (axios.isAxiosError(error)) {
                // Erro causado por Axios (problema de rede, servidor, etc.)
                // console.log('Axios error message: ', error.message);
                if (error.response) {
                    // O servidor retornou uma resposta com status de erro
                    // console.log('Response status: ', error.response.status);
                    // console.log('Response data: ', error.response.data);
                    throw error;
                } else if (error.request) {
                    // Nenhuma resposta foi recebida após o envio da requisição
                    // console.log('Request was made but no response received: ', error.request);
                    throw error;
                } else {
                    // Outro erro aconteceu ao preparar a requisição
                    // console.error('Error setting up request: ', error.message);
                    throw error;
                }
            } else {
                throw Error('Erro inesperado.')
                // console.log('Unexpected error in Authentication: ', error);
            }
        }
    }
    async update(object: any, path?: string): Promise<any> {
        try {
            const response = await axios.put(this.urlBase + `/${object.id}`, object);
            return response;
        } catch(error: any) {
            if (axios.isAxiosError(error)) {
                // Erro causado por Axios (problema de rede, servidor, etc.)
                // console.log('Axios error message: ', error.message);
                if (error.response) {
                    // O servidor retornou uma resposta com status de erro
                    // console.log('Response status: ', error.response.status);
                    // console.log('Response data: ', error.response.data);
                    throw error;
                } else if (error.request) {
                    // Nenhuma resposta foi recebida após o envio da requisição
                    // console.log('Request was made but no response received: ', error.request);
                    throw error;
                } else {
                    // Outro erro aconteceu ao preparar a requisição
                    // console.error('Error setting up request: ', error.message);
                    throw error;
                }
            } else {
                throw Error('Erro inesperado.')
                // console.log('Unexpected error in Authentication: ', error);
            }
        }
    }
    async delete(id: any, path?: string): Promise<any> {
        console.log('URL DELETE CLIENTE: ', this.urlBase + `/${id}`)
        try {
            const response = await axios.delete(this.urlBase + `/${id}`);
            return response;
        } catch(error: any) {
            if (axios.isAxiosError(error)) {
                // Erro causado por Axios (problema de rede, servidor, etc.)
                // console.log('Axios error message: ', error.message);
                if (error.response) {
                    // O servidor retornou uma resposta com status de erro
                    // console.log('Response status: ', error.response.status);
                    // console.log('Response data: ', error.response.data);
                    throw error;
                } else if (error.request) {
                    // Nenhuma resposta foi recebida após o envio da requisição
                    // console.log('Request was made but no response received: ', error.request);
                    throw error;
                } else {
                    // Outro erro aconteceu ao preparar a requisição
                    // console.error('Error setting up request: ', error.message);
                    throw error;
                }
            } else {
                throw Error('Erro inesperado.')
                // console.log('Unexpected error in Authentication: ', error);
            }
        }
    }

 

}