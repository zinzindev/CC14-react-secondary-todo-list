import axios from 'axios';
import TodoContainer from '../components/TodoContainer';
import TodoForm from '../components/TodoForm';
import { useEffect, useState } from 'react';

function HomePage() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		// ห้าม useEffect เป็น async (useEffect(aync() => {})เพราะลำดับการทำงานจะหายไป ต้องสร้าง function ซ้อนเข้าไปอีกชั้น
		const fetchTodo = async () => {
			try {
				const res = await axios.get('http://localhost:8007/todos', {
					headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
				});

				setTodos(res.data.todos);
			} catch (error) {
				alert('Fetch todo error');
			}
		};

		fetchTodo();
	}, []);

	const createTodo = async (title) => {
		try {
			const res = await axios.post(
				'http://localhost:8007/todos',
				{ title },
				{ headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }
			);

			setTodos([res.data.todo, ...todos]);
		} catch (error) {
			alert('Error create todo');
		}
	};

	return (
		<div className='container mt-5 mb-3' style={{ maxWidth: 576 }}>
			<div className='my-4'>
				<TodoForm onSubmit={createTodo} />
			</div>
			<TodoContainer todos={todos} />
		</div>
	);
}

export default HomePage;
