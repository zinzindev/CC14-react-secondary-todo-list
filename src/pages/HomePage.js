import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoContainer from '../components/TodoContainer';
import TodoForm from '../components/TodoForm';
import { addTodo, fetchTodo } from '../stores/todoSlice';

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
		dispatch(fetchTodo());
	}, [dispatch]);

	return (
		<div className='container mt-5 mb-3' style={{ maxWidth: 576 }}>
			<div className='my-4'>
				<TodoForm onSubmit={(title) => dispatch(addTodo(title))} />
			</div>
			<TodoContainer todos={todos} deleteTodo={() => {}} />
		</div>
	);
}

export default HomePage;
