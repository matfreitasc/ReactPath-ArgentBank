import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useRef, useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setCredentials, setUser } from './Profile/authSlice';
import { useLoginMutation } from './Profile/authApiSlice';
import { useGetUserMutation } from './Profile/userApiSlice';

import usePersist from '../hooks/usePersist';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [login, { isLoading }] = useLoginMutation();
	const [getUser, { isSuccess }] = useGetUserMutation();

	const userRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');

	const [persist, setPersist] = usePersist();

	if (isLoading) return <div>Loading...</div>;

	const handleUserInput = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordInput = (e) => {
		setPassword(e.target.value);
	};

	const handleToggle = () => setPersist((prev) => !prev);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const result = await login({ email, password }).unwrap();
			const accessToken = result.body.token;
			// set the token in local storage
			localStorage.setItem('accessToken', accessToken);
			dispatch(setCredentials({ email, accessToken }));
			setEmail('');
			setPassword('');
			const userResult = await getUser().unwrap();
			dispatch(setUser(userResult));
			navigate('/profile');
		} catch (err) {
			if (!err.status) {
				setErrMsg('Network Error');
			} else if (err.data.status === 401) {
				setErrMsg('Invalid Credentials');
			} else if (err.data.status === 400) {
				setErrMsg('Invalid Credentials');
			} else {
				setErrMsg(err.data?.message);
			}
		}
	};

	const content = (
		<>
			<Navbar />
			<main className='main bg-dark'>
				<section className='sign-in-content'>
					<i className='fa fa-user-circle sign-in-icon'></i>
					<h1>Sign In</h1>
					<form onSubmit={handleSubmit}>
						<div className='input-wrapper'>
							<label htmlFor='email'>email</label>
							<input type='text' id='email' ref={userRef} value={email} onChange={handleUserInput} autoComplete='off' required />
						</div>
						<div className='input-wrapper'>
							<label htmlFor='password'>Password</label>
							<input type='password' id='password' value={password} onChange={handlePasswordInput} autoComplete='off' required />
						</div>
						<div className='input-remember'>
							<input type='checkbox' id='remember-me' checked={persist} onChange={handleToggle} />
							<label htmlFor='remember-me'>Remember me</label>
						</div>
						<button className='sign-in-button'>Sign In</button>
					</form>
				</section>
			</main>
			<Footer />
		</>
	);
	return content;
};

export default Login;
