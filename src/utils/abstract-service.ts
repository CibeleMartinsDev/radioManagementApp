export default abstract class AbstractService {

    // Define os métodos abstratos que outras classes devem implementar
    abstract get(path?: string): Promise<any>;

    abstract getById(id: string, path?: string): Promise<any>;

    abstract getByName(name: string, path?: string): Promise<any>;

    abstract register(object: any, path?: string): Promise<any>;

    abstract update(object: any, path?: string): Promise<any>;

    abstract delete(id: string, path?: string): Promise<any>;
}