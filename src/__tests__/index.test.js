import React from 'react';
import ReactDOM from 'react-dom';
import '../app/index';

jest.mock('../app/store', () => ({
    common: () => {},
}));
jest.mock('react-dom', () => ({
    render: jest.fn()
}));

describe('index', () => {
    it('should return a Provider with App', () => {
        expect(ReactDOM.render).toMatchSnapshot();
    });
});