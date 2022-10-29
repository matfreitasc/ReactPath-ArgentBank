import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import { useGetUserMutation, useUpdateUserMutation } from './userApiSlice';
import { selectCurrentUser, setUser } from './authSlice';
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
	const dispatch = useDispatch();

	const [editName, setEditName] = useState(false);

	const [updateUser, { isLoading, error, isUpdating, isSuccess }] = useUpdateUserMutation();

	const user = useSelector(selectCurrentUser);

	const [firstName, setFirstName] = useState(user?.firstName);
	const [lastName, setLastName] = useState(user?.lastName);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const result = await updateUser({ firstName, lastName }).unwrap();
			dispatch(setUser(result));
			setEditName(false);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<Navbar />
			<main className='main bg-dark'>
				<div className='header'>
					{isUpdating ? (
						<div>Updating...</div>
					) : (
						<h1>
							Welcome back
							<br />
							{!editName ? `${user.firstName} ${user.lastName}` : null}
						</h1>
					)}
					{editName ? (
						<form className='edit-form'>
							<div className='edit-form-inputs'>
								<div className=''>
									<label htmlFor='firstName' className='sr-only'>
										First Name
									</label>
									<input
										type='text'
										id='firstName'
										placeholder={user.firstName}
										onChange={(e) => {
											setFirstName(e.target.value);
										}}
									/>
								</div>
								<div className=''>
									<label htmlFor='lastName' className='sr-only'>
										Last Name
									</label>
									<input
										type='text'
										id='lastName'
										placeholder={user.lastName}
										onChange={(e) => {
											setLastName(e.target.value);
										}}
									/>
								</div>
							</div>

							<div className='edit-form-buttons'>
								<button type='submit' onClick={handleSubmit}>
									Save
								</button>
								<button
									onClick={() => {
										setEditName(false);
										setFirstName(user.firstName);
										setLastName(user.lastName);
									}}>
									Cancel
								</button>
							</div>
						</form>
					) : (
						<button className='edit-button' onClick={() => setEditName(!editName)}>
							Edit Name
						</button>
					)}
				</div>
				<h2 className='sr-only'>Accounts</h2>
				<section className='account'>
					<div className='account-content-wrapper'>
						<h3 className='account-title'>Argent Bank Checking (x8349)</h3>
						<p className='account-amount'>$2,082.79</p>
						<p className='account-amount-description'>Available Balance</p>
					</div>
					<div className='account-content-wrapper cta'>
						<Link to='/profile/transactions' className='transaction-button'>
							View transactions
						</Link>
					</div>
				</section>
				<section className='account'>
					<div className='account-content-wrapper'>
						<h3 className='account-title'>Argent Bank Savings (x6712)</h3>
						<p className='account-amount'>$10,928.42</p>
						<p className='account-amount-description'>Available Balance</p>
					</div>
					<div className='account-content-wrapper cta'>
						<Link to='/profile/transactions' className='transaction-button'>
							View transactions
						</Link>
					</div>
				</section>
				<section className='account'>
					<div className='account-content-wrapper'>
						<h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
						<p className='account-amount'>$184.30</p>
						<p className='account-amount-description'>Current Balance</p>
					</div>
					<div className='account-content-wrapper cta'>
						<Link to='/profile/transactions' className='transaction-button'>
							View transactions
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default User;
