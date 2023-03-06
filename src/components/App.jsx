
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import HomePage from 'pages/HomePage/HomePage';
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { refreshUser } from 'redux/auth/operations';
import { Background } from './Container/Background';
import { useAuth } from 'hooks/useAuth';
import Layout from './Layout/Layout';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';


export const App = () => {
const {isRefreshing} = useAuth()
const dispatch = useDispatch();

useEffect(()=> {
	dispatch(refreshUser())
}, [dispatch])


  return isRefreshing ? ('Fetching  user data') : (
     <Background>

	
			<Routes>
					<Route path='/' element={<Layout/>}>
								<Route index element={<HomePage/>}/>
								<Route path='/contacts' element={<PrivateRoute component={ContactsPage} redirectTo='/login' />}/>
								<Route path='/register' element={<RestrictedRoute component={Registration} redirectTo='/contacts'/>}/>
								<Route path='/login' element={<RestrictedRoute component={Login} redirectTo='/contacts'/>}/> 


					</Route>

			</Routes>
    
   </Background>
  );
};
