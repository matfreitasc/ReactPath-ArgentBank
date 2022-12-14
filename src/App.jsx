import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import User from './Pages/Profile/User';
import Index from './Pages/Index';
import Login from './Pages/Login';
import Transactions from './Pages/Transactions/Transactions';
import PrivateRoute from './utils/PrivateRoute';
import PersistLogin from './components/PersistLogin';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Index />} />
				<Route path='login' element={<Login />} />
				<Route element={<PersistLogin />}>
					<Route element={<PrivateRoute />}>
						<Route path='profile' element={<User />} />
						<Route path='profile/transactions' element={<Transactions />} />
					</Route>
				</Route>
				<Route path='*' element={<h1>404</h1>} />
			</Route>
		</Routes>
	);
}

export default App;
