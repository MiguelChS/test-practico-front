import axios from 'axios';
jest.mock('axios');
const mockRequest = jest.fn();
axios.create = (() => ({ request: mockRequest })) as any
import supertest from 'supertest';
import { server } from '../index';
import expectSearch from './expectSearch.json';
import expectDetails from './expectDetails.json';

const appServer = supertest(server);

describe('app server', () => {
    it('should return status 200 and search product', async () => {
        mockRequest
            .mockResolvedValueOnce({ data: expectSearch.response.search })
            .mockResolvedValueOnce({ data: expectSearch.response.category })
        const response = await appServer.get('/api/items?q=iphone');
        expect(response.status).toEqual(200);
        expect(response.body).toEqual(expectSearch.expect);
    });
    it('should return status 200 and product detail', async () => {
        mockRequest
            .mockResolvedValueOnce({ data: expectDetails.response.details })
            .mockResolvedValueOnce({ data: expectDetails.response.description })
            .mockResolvedValueOnce({ data: expectDetails.response.category })
        const response = await appServer.get('/api/items/MLA841967810');
        expect(response.status).toEqual(200);
        expect(response.body).toEqual(expectDetails.expect);
    });
})