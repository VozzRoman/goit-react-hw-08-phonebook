import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer${token}`;
};

const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = '';
};


//POST
//users/signup
//credential - обьект із данних (username, emeail, password)
export const registr = createAsyncThunk('auth/register', async (credential, thunkAPI)=> {
	try{
		const response = await axios.post('/users/signup', credential);
		setAuthHeader(response.data.token);
		return response.data;

	}catch(error){
		console.log(error)
		return thunkAPI.rejectWithValue(error.message);
	}
});


//POST
//users/login
const logIn = createAsyncThunk('auth/logIn', async (credential, thunkAPI)=> {});



