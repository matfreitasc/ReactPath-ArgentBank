import { apiSlice } from '../../app/api/apiSlice';
import { logOut } from './authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: '/user/login',
				method: 'POST',
				body: credentials,
			}),
			invalidatesTags: ['User'],
			onQueryStarted: (credentials, { dispatch, queryFulfilled }) => {
				queryFulfilled.then((result) => {
					if (result.data.accessToken) {
						dispatch(logOut());
					}
				});
			},
		}),
		register: builder.mutation({
			query: (credentials) => ({
				url: '/user/signup',
				method: 'POST',
				body: credentials,
			}),
			invalidatesTags: ['User'],
			onQueryStarted: (credentials, { dispatch, queryFulfilled }) => {
				queryFulfilled.then((result) => {
					if (result.data.accessToken) {
						dispatch(logOut());
					}
				});
			},
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
