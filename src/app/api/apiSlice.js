import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = 'http://localhost:3001/';

export const apiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: url }),
	tagTypes: ['Note', 'User'],
	endpoints: (builder) => ({}),
});
