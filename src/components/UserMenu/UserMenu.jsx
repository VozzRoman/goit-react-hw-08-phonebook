import { useAuth } from 'hooks/useAuth'
import React from 'react'
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LogButtton, LogOut, LogText } from './UserName.styled';

const UserMenu = () => {
	const dispatch = useDispatch();
	const {user} = useAuth();
 
	
	

  return (
	 <div>
		<LogOut>
      <LogText >Welcome: <span>{user.email}</span></LogText>
      <LogButtton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogButtton>
    </LogOut>
	 </div>
  )
}

export default UserMenu
