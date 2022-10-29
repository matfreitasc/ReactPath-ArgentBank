import { Outlet, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useGetUserMutation } from '../Pages/Profile/userApiSlice';
import usePersist from '../hooks/usePersist';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentToken, setUser } from '../Pages/Profile/authSlice';
import React from 'react';

const PersistLogin = () => {
	const [persist] = usePersist();
	const token = useSelector(selectCurrentToken);
	const effectRan = useRef(false);
	const dispatch = useDispatch();

	const [trueSuccess, setTrueSuccess] = useState(false);

	const [getUser, { isUninitialized, isLoading, isSuccess, isError, error }] = useGetUserMutation();

	useEffect(() => {
		if (effectRan.current == true || process.env.NODE_ENV !== 'development') {
			const getUser = async () => {
				try {
					const result = await getUser().unwrap();
					console.log(result);
					dispatch(setUser(result));
					setTrueSuccess(true);
				} catch (err) {
					console.log(err);
				}
			};
			if (persist && token) {
				getUser();
			}
		}
		return () => (effectRan.current = true);
	}, []);

	let content;
	if (isUninitialized) {
		content = <div>Uninitialized</div>;
	}
	if (isLoading) {
		content = <div>Loading...</div>;
	}
	if (isSuccess) {
		content = <Outlet />;
	}
	if (isError) {
		content = <div>{error}</div>;
	}
	return content;
};

export default PersistLogin;
