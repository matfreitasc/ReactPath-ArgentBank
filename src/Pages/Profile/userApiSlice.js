import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../app/api/apiSlice';

const usersAdapter = createEntityAdapter({});
const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.mutation({
			query: () => ({
				url: '/user/profile',
				method: 'POST',
				body: {},
			}),
		}),
		updateUser: builder.mutation({
			query: (body) => ({
				url: '/user/profile',
				method: 'PUT',
				body,
			}),
		}),
	}),
	reducerPath: 'usersApi',
});

export const { useGetUserMutation, useUpdateUserMutation } = usersApiSlice;

export const selectedUsersResult = usersApiSlice.endpoints.getUser.select();

const selectUsersData = createSelector(selectedUsersResult, (usersResult) => usersResult.data);

export const {
	selectAll: selectAllUsers,
	selectById: selectUserById,
	selectIds: selectUserIds,
} = usersAdapter.getSelectors((state) => selectUsersData(state) ?? initialState);
