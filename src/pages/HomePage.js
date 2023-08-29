import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import TodoContainer from '../components/TodoContainer';
import TodoForm from '../components/TodoForm';
import { createTodo, getAllTodo } from '../stores/todoSlice';

function HomePage() {
	// const todos = useSelector(function (state) {
	// 	return state.todoStore.todoIniState;
	// });

	// console.log(useSelector);

	// const todos = useSelector((state) => {
	// 	console.log(state);

	// 	return state.todoStore.todoIniState;
	// });

	const todos = useSelector(({ todoStore: { todoIniState } }) => todoIniState);

	const dispatch = useDispatch();
	// console.log(dispatch);

	useEffect(() => {
		const fetchTodo = async () => {
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

		fetchTodo();
	}, []);

	return (
		<div className='container mt-5 mb-3' style={{ maxWidth: 576 }}>
			<div className='my-4'>
				<TodoForm onSubmit={() => {}} />
			</div>
			<TodoContainer todos={todos} deleteTodo={() => {}} />
		</div>
	);
}

export default HomePage;
