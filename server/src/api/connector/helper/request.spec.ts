import { Request } from './request';
import axios from 'axios';

describe('Request', () => {
    const data = ['miguel', 'chauca'];
    let spyOnCreate = jest.spyOn(axios, "create");;
    it('should return data status when request is success', async () => {
        spyOnCreate.mockImplementation((algo: any): any => {
            return {
                request: async () => ({
                    status: 200,
                    message: null,
                    data: data
                })
            }
        })
        const request = new Request();
        const result = await request.execute({
            url: 'http://localhost:3006/test',
            method: "GET",
        })
        expect(result).toEqual({
            status: 200,
            data: data
        });
    });

    it('should return status message when request is not success', async () => {
        spyOnCreate.mockImplementation((algo: any): any => {
            return {
                request: async () => {
                    throw {
                        response: {
                            status: 404,
                            data: 'brand is required'
                        },
                        message: 'Bad Request'
                    }
                }
            }
        })
        const request = new Request();
        try {
            await request.execute({
                url: 'http://localhost:3006/test',
                method: "GET",
            })
        } catch (error) {
            const { httpStatus, message } = error;
            expect({ httpStatus, message }).toEqual({
                httpStatus: 404,
                message: 'Bad Request'
            });
        }
    });

    it('shoudl return only message when request is timeout', async () => {
        spyOnCreate.mockImplementation((algo: any): any => {
            return {
                request: async () => {
                    throw {
                        message: 'timeout of 10ms exceeded'
                    }
                }
            }
        })
        const request = new Request();
        try {
            await request.execute({
                url: 'http://localhost:3006/test',
                method: "GET",
            })
        } catch (error) {
            const { httpStatus, message } = error;
            expect({ httpStatus, message } ).toEqual({
                httpStatus: 0,
                message: 'timeout of 10ms exceeded',
            });
        }
    })
})