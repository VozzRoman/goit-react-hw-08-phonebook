
import { useAuth } from 'hooks/useAuth'
import React from 'react'
import { Navigate } from 'react-router';

const RestrictedRoute = ({component: Compnent, redirectTo = '/'}) => {
	const {isLoggedIn} = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Compnent/>;
}

export default RestrictedRoute
