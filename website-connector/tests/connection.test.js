const { connectToWebsite } = require('../src/index');
const axios = require('axios');

jest.mock('axios');

describe('connectToWebsite', () => {
    it('should connect to a valid website and return response', async () => {
        const url = 'https://example.com';
        const responseData = { data: 'response data' };
        
        axios.get.mockResolvedValue(responseData);
        
        const response = await connectToWebsite(url);
        
        expect(response).toEqual(responseData);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    it('should throw an error for an invalid website', async () => {
        const url = 'https://invalid-url.com';
        
        axios.get.mockRejectedValue(new Error('Network Error'));
        
        await expect(connectToWebsite(url)).rejects.toThrow('Network Error');
    });
});