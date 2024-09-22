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

    getById(id: string, path?: string): Promise<any> {
        throw new Error("Method not implemented.");
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

    register(object: any, path?: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(object: any, path?: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: string, path?: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
  
}