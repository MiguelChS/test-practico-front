import { Method } from 'axios';
interface IEndpoint {
    url: string;
    timeout: number;
    method: Method;
}

interface IConfig {
    search: IEndpoint;
    product: {
        details: IEndpoint;
        description: IEndpoint;
    };
    category: IEndpoint;
}

export const config: IConfig = {
    search: {
        timeout: 5000,
        url: `https://api.mercadolibre.com/sites/MLA/search?q=:query`,
        method: 'GET',
    },
    product: {
        details: {
            timeout: 5000,
            url: `https://api.mercadolibre.com/items/:id`,
            method: 'GET',
        },
        description: {
            timeout: 5000,
            url: `https://api.mercadolibre.com/items/:id/description`,
            method: 'GET',
        }
    },
    category: {
        timeout: 5000,
        url: 'https://api.mercadolibre.com/categories/:id',
        method: "GET"
    }
}