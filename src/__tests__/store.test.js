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
//
// const composeEnhancers =
//     process.env.NODE_ENV === 'development' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//         : compose;
//
// const enhancer = composeEnhancers(applyMiddleware(thunk));
//
// const createReducer = (asyncReducers) => {
//     return combineReducers({
//         ...staticReducers,
//         ...asyncReducers,
//     });
// };
//
// const configureStore = () => {
//     const store = createStore(createReducer(), enhancer);
//
//     // Add a dictionary to keep track of the registered async reducers
//     store.asyncReducers = {};
//
//     // Create an inject reducer function
//     // This function adds the async reducer, and creates a new combined reducer
//     store.injectReducer = (key, asyncReducer) => {
//         if (!store.asyncReducers[key]) {
//             store.asyncReducers[key] = asyncReducer;
//             store.replaceReducer(createReducer(store.asyncReducers));
//         }
//     };
//
//     // Return the modified store
//     return store;
// };
//
// export default configureStore();