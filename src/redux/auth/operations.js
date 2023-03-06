import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = '';
};


//POST
// /users/signup
//credential - обьект із данних (body:{username, emeail, password})
export const registr = createAsyncThunk('auth/register', async (credential, thunkAPI)=> {
	try{
		const response = await axios.post('/users/signup', credential);
		setAuthHeader(response.data.token);
		console.log(response.data);
		return response.data;

	}catch(error){
		console.log(error)
		return thunkAPI.rejectWithValue(alert('User already exist'));
	}
});


//POST
// /users/login
//credential - обьект із данних (body:{email, password})
export const logIn = createAsyncThunk('auth/login', async (credential, thunkAPI)=> {
	try{
		const response = await axios.post('/users/login', credential);
		setAuthHeader(response.data.token);
		console.log(response.data);
		return response.data;

	}catch (error){
		console.log(error)
		return thunkAPI.rejectWithValue(alert('Wrong login or password'));
	}
});


//POST
// /users/logout
// headers: Authrization: Bearer token

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try{
		await axios.post('/users/logout');
		clearAuthHeader();
	
	
	}catch(error){
		console.log(error)
		return thunkAPI.rejectWithValue(error.message);
	}
});

//GET /users/current
// headers: Authrization: Bearer token

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI)=> {

	   //  Reading the token from the state via getState()
		 const state = thunkAPI.getState();
		 const persistedToken = state.auth.token;
		 console.log(persistedToken);
		 if (persistedToken === null) { // если пользовательне не залогинени
			return thunkAPI.rejectWithValue('Unable to fetch user');
		 }
		 try {
			
			setAuthHeader(persistedToken); // если пользовательне залогинени
			const response = await axios.get('/users/current');
			return response.data;
		 } catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		 }
})


