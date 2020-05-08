import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ErrorStandar } from '../../../utils/errorStandar';
export interface IResponse<T> {
    status: number;
    data: T;
    message?: string;
    headers?: any;
}

export class Request {
    private http: AxiosInstance;
    constructor() {
        this.http = axios.create({ timeout: 10000 });
    }
    public async execute<T>(options: AxiosRequestConfig): Promise<IResponse<T>> {
        try {
            const { data, status } = await this.http.request(options);
            return { data, status };
        } catch (err) {
            const { response: { status = null, data = null } = {}, message } = err;
            throw new ErrorStandar(message, status || 0, { ...data, ...options });
        }
    }
}

export const request = new Request();