import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import Home from './pages/Home';

function App() {
	return (
		<Routes>
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/' element={<Home />} />
		</Routes>
	);
}

export default App;
