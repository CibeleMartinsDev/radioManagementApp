import { API_URL } from "@env";
import AbstractService from "../utils/abstract-service";
import axios, { AxiosResponse } from "axios";
import { reporter } from "../../metro.config";


export default class AdvertisementService extends AbstractService {
   

    public urlBase: string = API_URL + '/advertisement';


    async get(path?: string): Promise<AxiosResponse<any, any>> {
        try {
            const response = await axios.get(this.urlBase + (path || ''));
            return response;
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                // Verifica se há uma resposta do servidor
                if (error.response) {
                    throw error;
                } else if (error.request) {
                    // Nenhuma resposta foi recebida
                    throw error;
                } else {
                    // Outro erro de Axios
                    throw error;
                }
            } else {
                // Erro inesperado
                throw new Error('Unexpected error occurred.');
            }
        }
    }
    // async getById(id: string, path?: string): Promise<AxiosResponse<any, any>> {
    //     // const response = await super.getById(id, path); 
        
    //     // return response; 
    // }

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
    async getByName(name: string, path?: string): Promise<AxiosResponse<any, any>> {
        try {
            console.log('Tentando pesquisar advertisement pelo nome...')
            const response = await axios.get(this.urlBase + (path || '') + `/${name}`);
            console.log('Retornou pesquisa de advertisement pelo nome!!!!')
            return response;
        } catch (error: any) {
            console.log('Erro na pesquisa de advertisement pelo nome :(')
            if (axios.isAxiosError(error)) {
                // Verifica se há uma resposta do servidor
                if (error.response) {
                    throw error;
                } else if (error.request) {
                    // Nenhuma resposta foi recebida
                    throw error;
                } else {
                    // Outro erro de Axios
                    throw error;
                }
            } else {
                // Erro inesperado
                throw new Error('Unexpected error occurred.');
            }
        }
    }

    async register(object: any, path?: string): Promise<any> {
        try {
            const response = await axios.post(this.urlBase, object);
            return response;
        } catch(error: any) {
            if (axios.isAxiosError(error)) {
                // Erro causado por Axios (problema de rede, servidor, etc.)
                // console.log('Axios error message: ', error.message);
                if (error.response) {
                    // O servidor retornou uma resposta com status de erro
                    console.log('Response status: ', error.response.status);
                    console.log('Response data: ', error.response.data);
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
                    console.log('Response status: ', error.response.status);
                    console.log('Response data: ', error.response.data);
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
    delete(id: string, path?: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
  
}