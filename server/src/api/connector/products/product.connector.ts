import { config, } from '../config/endpoints';
import { Request, request } from '../helper/request';
import { uriParser } from '../helper/uriParse';
export class ProductConnector {
    constructor(
        private request: Request
    ) { }
    search(query: string) {
        const { url, method, timeout } = config.search;
        const uri = uriParser(url, {
            query
        })
        return this.request.execute({
            url: uri,
            method,
            timeout
        })
    }
}

export const productConnector = new ProductConnector(request);