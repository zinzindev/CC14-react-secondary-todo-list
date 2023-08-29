import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
	name: 'todo',
	initialState: { todoIniState: [] },
	reducers: {
		getAllTodo: (state, action) => {
			state.todoIniState = action.payload;
		},
		createTodo: (state, action) => {},
		updateTodo: (state, action) => {},
		deleteTodo: (state, action) => {},
	},
});

// return -> reducer fn, name, action creaters
console.log(todoSlice.reducer);

export default todoSlice.reducer; // -> todoSliceReducer -> ./store/index.js

export const { getAllTodo, createTodo, updateTodo, deleteTodo } = todoSlice.actions;

// function reducer(state, action) {
// 	switch (action.type) {
// 		case 'todo/getAllTodo': {
//  		  state.todoIntState = act  ion.payload;
// 		}
// 		case 'todo/createTodo': {
// 		}
// 	}
// }

// function getAllTodo(value) {
//     return {type: 'todo/getAllTodo', payload: value};
// }

// dispatch(getAllTodo(8)) -> dispatch({type: 'todo/getAllTodo', payload: 8})
