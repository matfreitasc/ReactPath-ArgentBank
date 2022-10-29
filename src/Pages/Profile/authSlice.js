import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {},
	reducers: {
		setCredentials: (state, action) => {
			const { accessToken, email } = action.payload;
			state.email = email;
			state.token = accessToken;
		},
		setUser: (state, action) => {
			const { body } = action.payload;
			state.firstName = body.firstName;
			state.lastName = body.lastName;
			state.id = body.id;
		},
		logOut: (state, action) => {
			state.token = null;
			state.id = null;
			state.firstName = null;
			state.lastName = null;
			state.email = null;
		},
	},
});

export const { setCredentials, logOut, setUser } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth;
