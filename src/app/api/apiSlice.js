import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = 'http://localhost:3001/api/v1';

const baseQuery = fetchBaseQuery({
	baseUrl: url,
	mode: 'cors',
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;
		if (token) {
			headers.set('Authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

export const apiSlice = createApi({
	baseQuery,
	tagTypes: ['User'],
	endpoints: (builder) => ({}),
});
