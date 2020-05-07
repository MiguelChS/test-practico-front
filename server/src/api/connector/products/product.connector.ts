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
        });
    }

    details(id: string) {
        const { url, method, timeout } = config.product.details;
        const uri = uriParser(url, {
            id
        });
        return this.request.execute({
            url: uri,
            method,
            timeout
        });
    }

    description(id: string) {
        const { url, method, timeout } = config.product.description;
        const uri = uriParser(url, {
            id
        });
        return this.request.execute({
            url: uri,
            method,
            timeout
        });
    }

}

export const productConnector = new ProductConnector(request);