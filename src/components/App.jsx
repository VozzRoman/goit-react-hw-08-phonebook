
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import HomePage from 'pages/HomePage/HomePage';
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';
import { Route, Routes } from 'react-router';
import { Background } from './Container/Background';
import { Box } from './Container/Box';
import Layout from './Layout/Layout';


export const App = () => {




  return (
     <Background>

	
			<Routes>
					<Route path='/' element={<Layout/>}>
								<Route index element={<HomePage/>}/>
								<Route path='/contacts' element={<ContactsPage/>}/>
								<Route path='/register' element={<Registration/>}/>
								<Route path='/login' element={<Login/>}/>


					</Route>

			</Routes>
    
   </Background>
  );
};
