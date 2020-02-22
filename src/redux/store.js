import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducers from './root-reducer';

const middlewares = [];

    if (process.env.NODE_ENV === "production") {
        middlewares.push(logger);
    };

export const store = createStore(rootReducers, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default {store, persistor};
