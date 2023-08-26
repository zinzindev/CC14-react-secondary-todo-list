import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
	name: 'todo',
	initialState: { todos: [] },
	reducers: {
		getAllTodo: (state, action) => {
			state.todos = action.payload;
		},
		createTodo: (state, action) => {},
		updateTodo: (state, action) => {},
		deleteTodo: (state, action) => {},
	},
});

// reducer fn, name, action creaters

export default todoSlice.reducer;


export const { getAllTodo, createTodo, updateTodo, deleteTodo } = todoSlice.actions;

// function reducer(state, action) {
// 	switch (action.type) {
// 		case 'todo/getAllTodo': {
//  		 state.todos = action.payload;
// 		}
// 		case 'todo/createTodo': {
// 		}
// 	}
// }

// function getAllTodo(value) {
//     return {type: 'todo/getAllTodo', payload: value};
// }

// dispatch(getAllTodo(8)) -> dispatch({type: 'todo/getAllTodo', payload: 8})
