import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import User from './components/User';
import Index from './Pages/Index';
import SignIn from './Pages/SignIn';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Index />} />
				<Route path='sign-in' element={<SignIn />} />
				<Route path='/user' element={<User />} />
				<Route path='*' element={<h1>404</h1>} />
			</Route>
		</Routes>
	);
}

export default App;
