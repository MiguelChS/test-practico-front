import { searchConvert } from './search.convert';

const mockResult: any = {
    results: [
        { category_id: '1' },
        { category_id: '1' },
        { category_id: '1' },
        { category_id: '2' },
        { category_id: '2' },
        { category_id: '1' },
        { category_id: '3' },
        { category_id: '1' },
    ]
}

const mockSearchResult: any = {
    results: [
        {
            "id": "MLA841967810",
            "title": "Auriculares Apple Earpods With Lightning Connector Blanco",
            "price": 3999.99,
            "currency_id": "ARS",
            "category_id": "1",
            "condition": "new",
            "thumbnail": "http://mla-s1-p.mlstatic.com/957682-MLA40251750147_122019-I.jpg",
            "shipping": {
                "free_shipping": true
            }
        },
        {
            "id": "MLA841967810",
            "title": "Auriculares Apple Earpods With Lightning Connector Blanco",
            "price": 400,
            "currency_id": "ARS",
            "category_id": "1",
            "condition": "new",
            "thumbnail": "http://mla-s1-p.mlstatic.com/957682-MLA40251750147_122019-I.jpg",
            "shipping": {
                "free_shipping": true
            }
        }
    ]
}

const mockAuthor: any = {
    name: 'Miguel Angel',
    lastname: 'Chauca Sanchez'
}

const mockCategory: any = {
    path_from_root: [
        { name: "a" },
        { name: "b" },
        { name: "c" }
    ]
}

describe('SearchConvert', () => {
    it('should return category_id 1', () => {
        const result = searchConvert.getCategoryWithMoreResult(mockResult);
        expect(result).toEqual('1')
    });
    it('should return category_id 1', () => {
        const result = searchConvert.getCategoryWithMoreResult({ results: [{ category_id: '1' }] } as any);
        expect(result).toEqual('1')
    });
    it('should return empty', () => {
        const result = searchConvert.getCategoryWithMoreResult({ results: [] } as any);
        expect(result).toEqual('')
    });
    it('should return list of search', () => {
        const result = searchConvert.convert(mockSearchResult, mockAuthor, mockCategory);
        expect(result).toEqual({
            "author": { "lastname": "Chauca Sanchez", "name": "Miguel Angel" },
            "categories": ["a", "b", "c"],
            "items": [
                {
                    "condition": "new",
                    "free_shipping": true,
                    "id": "MLA841967810",
                    "picture": "http://mla-s1-p.mlstatic.com/957682-MLA40251750147_122019-I.jpg",
                    "price": { "amount": 3999, "currency": "$", "decimals": 99 },
                    "title": "Auriculares Apple Earpods With Lightning Connector Blanco"
                },
                {
                    "condition": "new",
                    "free_shipping": true,
                    "id": "MLA841967810",
                    "picture": "http://mla-s1-p.mlstatic.com/957682-MLA40251750147_122019-I.jpg",
                    "price": { "amount": 400, "currency": "$", "decimals": 0 },
                    "title": "Auriculares Apple Earpods With Lightning Connector Blanco"
                }
            ]
        });
    });
})