import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const todoSlice = createSlice({
	name: 'todo',
	initialState: { todoIniState: [] },
	reducers: {
		getAllTodo: (state, action) => {
			state.todoIniState = action.payload;
		},
		createTodo: (state, action) => {
			state.todoIniState.unshift(action.payload);
		},
		updateTodo: (state, action) => {},
		deleteTodo: (state, action) => {},
	},
});

// return -> reducer fn, name, action creaters
console.log(todoSlice.reducer);

export default todoSlice.reducer; // -> todoSliceReducer -> ./store/index.js

export const { getAllTodo, createTodo, updateTodo, deleteTodo } = todoSlice.actions;

export const addTodo = (title) => async (dispatch) => {
	try {
		const res = await axios.post(
			'http://localhost:8007/todos',
			{ title },
			{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
		);

		dispatch(createTodo(res.data.todo));
	} catch (error) {
		alert('add error');
	}
};

export const fetchTodo = () => async (dispatch) => {
	try {
		const res = await axios.get('http://localhost:8007/todos', {
			headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
		});

		dispatch(getAllTodo(res.data.todos));
	} catch (error) {
		console.log(error);
		alert('fetch error');
	}
};

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

// !!! THUNK MIDDLEWARE !!!
// function thunk(){
// 	return async function(dispatch){
// 		const res = await axios.post('....', {})
// 		dispatch(createTodo(res.data.todo))
// 	}
// }

// dispatch({type:''})
// disparch(functoin(dispatch){
// 	console.log(''),
// 	dispatch({type: ''})
// })
