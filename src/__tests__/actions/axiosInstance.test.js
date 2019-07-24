import axios from 'axios';
import axiosInstance from '../../app/actions/axiosInstance';

jest.mock('axios', () => ({
    create: jest.fn()
}));

describe('axiosInstance', () => {
    it('should call axios create with an object containing a baseURL', () => {
        expect(axios.create).toHaveBeenCalledWith({
            baseURL: 'http://localhost:3000/',
        });
    });
});