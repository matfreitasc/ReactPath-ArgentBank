import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, setCredentials, setUser } from '../Pages/Profile/authSlice';

const Navbar = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector(selectCurrentUser);

	useEffect(() => {
		if (user.token) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [user]);

	const handleLogout = () => {
		localStorage.removeItem('persist');
		dispatch(logOut());
		navigate('/');
	};

	return (
		<nav className='main-nav'>
			<Link className='main-nav-logo' to='/'>
				<img className='main-nav-logo-image' src={Logo} alt='Argent Bank Logo' />
				<h1 className='sr-only'>Argent Bank</h1>
			</Link>
			{!isLoggedIn ? (
				<div>
					<Link className='main-nav-item icons-align' to='/login'>
						{/* <FontAwesomeIcon icon={faUser} className='user-icon' /> */}
						Sign In
					</Link>
				</div>
			) : (
				<div className='icons-align'>
					<Link className='main-nav-item icons-align' to='/profile'>
						<FontAwesomeIcon icon={faUser} className='user-icon' />
						{user.firstName}
					</Link>
					<div className='main-nav-item-button' to='/'>
						<i className='fa fa-sign-out'></i>
						<button className='main-nav-item-button' onClick={handleLogout}>
							Sign Out
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
