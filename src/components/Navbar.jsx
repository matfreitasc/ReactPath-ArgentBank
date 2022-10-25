import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/argentBankLogo.png';

const Navbar = () => {
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	return (
		<nav className='main-nav'>
			<Link className='main-nav-logo' to='/'>
				<img className='main-nav-logo-image' src={Logo} alt='Argent Bank Logo' />
				<h1 className='sr-only'>Argent Bank</h1>
			</Link>
			{!isLoggedIn ? (
				<div>
					<Link className='main-nav-item' to='sign-in'>
						<i className='fa fa-user-circle'></i>
						Sign In
					</Link>
				</div>
			) : (
				<div>
					<Link class='main-nav-item' to='/user/'>
						<i class='fa fa-user-circle'></i>
						Tony
					</Link>
					<Link class='main-nav-item' to='/'>
						<i class='fa fa-sign-out'></i>
						Sign Out
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
