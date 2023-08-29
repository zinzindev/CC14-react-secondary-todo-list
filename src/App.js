import { Route, Routes } from 'react-router-dom';

import { useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
	// const ctx = useContext(AuthContext);
	const ctx = useAuth(); //ใช้ coustom hook
	return (
		<>
			<Header />
			<Routes>
				{ctx.isLogged ? (
					<Route path='/' element={<HomePage />} />
				) : (
					<>
						<Route path='/register' element={<RegisterPage />} />
						<Route path='/login' element={<LoginPage />} />
					</>
				)}
				<Route path='*' element={<h1>404 !!! Not found</h1>} />
			</Routes>
		</>
	);
}

export default App;
