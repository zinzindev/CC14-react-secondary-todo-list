import { configureStore } from '@reduxjs/toolkit';
import todoSliceReducer from './todoSlice';

export const store = configureStore({
	reducer: { todoStore: todoSliceReducer },
});

console.log(store);

//Store
// {todoStore: {todoIntState: []}}
