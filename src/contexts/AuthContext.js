const { createContext, useState, useContext, useEffect } = require('react');

const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setIsLogged(true);
		}
	}, []);

	return (
		<AuthContext.Provider value={{ isLogged, setIsLogged }}>{children}</AuthContext.Provider>
	);
}

const useAuth = () => {
	// const ctx = useContext(AuthContext);
	return useContext(AuthContext);
};

export default AuthContextProvider;

export { AuthContext, useAuth };
