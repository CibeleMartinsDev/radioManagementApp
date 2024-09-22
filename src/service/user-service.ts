// import { AxiosResponse } from "axios";
// import AbstractService from "../utils/abstract-service";
// import { API_URL } from "@env";


// export default class UserService extends AbstractService {
//     constructor() {
//         super(API_URL + '/users'); // Passa a URL base para o construtor da classe base
//     }
  
//     async get(path?: string): Promise<AxiosResponse<any, any>> {
//         const response = await super.get(path); 
        
//         return response; 
//     }
//     async getById(id: string, path?: string): Promise<AxiosResponse<any, any>> {
//         const response = await super.getById(id, path); 
        
//         return response; 
//     }
//     async getByName(name: string, path?: string): Promise<AxiosResponse<any, any>> {
//         const response = await super.getByName(name, path); 
        
//         return response; 
//     }
//     async register(object: any, path?: string): Promise<AxiosResponse<any, any>> {
//         const response = await super.register(object, path); 
        
//         return response; 
//     }
//     async update(object: any, path?: string): Promise<AxiosResponse<any, any>> {
//         const response = await super.update(object, path); 
        
//         return response; 
//     }
//     async delete(id: string, path?: string): Promise<AxiosResponse<any, any>> {
//         const response = await super.delete(id, path); 
        
//         return response; 
//     }
// }