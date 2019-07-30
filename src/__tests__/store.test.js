import store from '../app/store';

jest.mock('../app/reducers/staticReducers', () => ({
    common: () => ({
        data: [1,2,3,4]
    })
}));

describe('store', () => {
    describe('getState', () => {
        it('should return common state', () => {
            expect(store.getState()).toEqual({
                common: {
                    data: [1,2,3,4]
                }
            });
        });
    });
    describe('injectReducer', () => {
        beforeEach(() => {
            const messagesReducer = () => ({
                messages: [1,2,3]
            });
            store.injectReducer('messages', messagesReducer);
        });
        it('should add messages reducer to state', () => {
            expect(store.getState()).toEqual({
                common: {
                    data: [1,2,3,4]
                },
                messages: {
                    messages: [1,2,3]
                }
            });
        });
        it('should not replace existing reducer on re-injection', () => {
            const messagesReducer = () => ({
                messages: ['apple']
            });
            store.injectReducer('messages', messagesReducer);
            expect(store.getState()).toEqual({
                common: {
                    data: [1,2,3,4]
                },
                messages: {
                    messages: [1,2,3]
                }
            });
        });
    });
});