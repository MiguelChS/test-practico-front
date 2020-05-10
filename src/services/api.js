const BASE_PATH_API = '/api'

const tranformCategori = (listaCategori) => {
    return listaCategori.map((item) => ({ text: item, href: '#' }));
}

export const api = {
    async search(value) {
        let response = await fetch(`${BASE_PATH_API}/items?q=${value}`);
        response = await response.json()
        return {
            ...response,
            categories: tranformCategori(response.categories)
        }
    },
    async product(idProduct) {
        let response = await fetch(`${BASE_PATH_API}/items/${idProduct}`);
        response = await response.json();
        return {
            ...response,
            categories: tranformCategori(response.categories)
        }
    }
}