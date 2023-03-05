import { useAuth } from 'hooks/useAuth'
import React from 'react'
import { LogButtton, LogOut, LogText } from './UserName.styled';

const UserMenu = () => {
	const {user} = useAuth();
  return (
	 <div>
		<LogOut>
      <LogText >Welcome: <span>{user.name}</span></LogText>
      <LogButtton type="button">
        Logout
      </LogButtton>
    </LogOut>
	 </div>
  )
}

export default UserMenu
