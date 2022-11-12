import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import usePersist from '../hooks/usePersist';
import { setUser } from '../Pages/Profile/authSlice';
import { useGetUserMutation } from '../Pages/Profile/userApiSlice';

const PersistLogin = () => {
	const token = localStorage.getItem('accessToken');
	const persist = localStorage.getItem('persist');

	if (token && persist) {
		return <Outlet />;
	} else {
		return <Navigate to={'/login'} />;
	}
};

export default PersistLogin;
