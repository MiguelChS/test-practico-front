import { ProductConnector, productConnector } from '../connector/products/product.connector';
import { SearchConvert, searchConvert } from '../converts/search/search.convert';
export class ProductService {
    constructor(
        private connector: ProductConnector,
        private searchConvert: SearchConvert
    ) { }

    async search({ query }: any) {
        const response = await this.connector.search(query);
        return this.searchConvert.convert(response.data);
    }
}

export const productService = new ProductService(productConnector, searchConvert);