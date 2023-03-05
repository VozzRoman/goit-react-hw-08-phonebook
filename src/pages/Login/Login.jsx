import { Button, EnterName, FildName, Forms } from 'components/ContactForm/ContactFormStyle';
import { Box } from 'components/Container/Box';
import React from 'react'
import { useForm } from 'react-hook-form';

const Login = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	 } = useForm({
		mode: 'all',
	 });
	 const onRegSubmit = data => {
		console.log(data.email);
		console.log(data.password);
	 //   const { name, phone } = data;
	 //   console.log(name, phone);
	 //   if (contacts.find(item => item.name === name)) {
	 // 	 return alert('this name alredy exist');
	 //   }
	 //   if (contacts.find(item => item.phone === phone)) {
	 // 	 return alert('this number alredy exist');
	 //   }
  
	 };
  return (
	<Box
	m="0 auto"
  maxWidth="500px"
  background="rgb(136, 136, 136, 0.9)"
  borderRadius="12px"
  p="20px"
  boxShadow="3px 4px 3px #888888">
	  <h1>Login</h1>
		<Forms onSubmit={handleSubmit(onRegSubmit)}>
		 <FildName htmlFor="email">
			Email
			<EnterName
			  {...register('email', {
				 required: 'please enter email',
		
			  })}
			  id="email"
			  type="mail"
			  name="email"
			  placeholder="example@email.com"
			/>
		 </FildName>
		 {errors?.email && (
			<span style={{ display: 'block', marginBottom: 5, color: 'red' }}>
			  {errors?.email?.message}
			</span>
		 )}
					<FildName htmlFor="password">
			Password
			<EnterName
			  {...register('password', {
				 required: 'please enter password',
				//  pattern: {
				// 	value: /\d{3}\d{2}\d{2}/,
				// 	message:
				// 	  'Password number must be digits and can contain spaces, dashes, parentheses',
				//  },
				//  maxLength: 8,
				//  message: 'Password has 7 digits',
			  })}
			  id="password"
			  type="password"
			  name="password"
			  placeholder="*******"
			/>
		 </FildName>
		 <span style={{ display: 'block', marginBottom: 5, color: 'red' }}>
			  {errors?.password?.message}
			</span>
		 <Button type="submit">
		  Regiter
		 </Button>
	  </Forms>
	  
	</Box>
  )
}

export default Login
