import { configureStore } from '@reduxjs/toolkit';
import postReducer from './feature/PostSlice';


export const store = configureStore({
    reducer: {
        postDetails: postReducer
    }
});