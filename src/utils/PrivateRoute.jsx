import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => {
	const auth = useSelector((state) => state.auth);

	return auth.token ? <Outlet /> : <Navigate to={'/login'} />;
};

export default PrivateRoute;
