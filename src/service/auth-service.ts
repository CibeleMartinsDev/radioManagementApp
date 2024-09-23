import { API_URL, AUTHORIZATION } from "@env";
import axios from "axios";
import ErrorResponse from "../interfaces/error";

export default class AuthService {

    private baseUrl: string = API_URL + '/auth';

    constructor(){
        
    }

     async authenticate(credentials: UserCredentials){
        console.log('Credenciais do usuário: ', credentials)

        try {
            // console.log('Tentando fazer o login...');
            const authentication = await axios.post(this.baseUrl,credentials)
            // console.log('Login realizado!')
            if(authentication.data !== null && authentication.data !== undefined){
                // console.log('Retorno token de autenticação: ', authentication.data.tokenAuthorization )
                return authentication.data.tokenAuthorization
            }
        }catch(error: any) {
            // console.log('Erro na autenticação: ', error)
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
                // console.log('Unexpected error in Authentication: ', error);
            }
        }
    }
}