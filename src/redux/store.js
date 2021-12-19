import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './reducers';

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
    },
});
