import { Button, EnterName, FildName, Forms } from 'components/ContactForm/ContactFormStyle'
import { Box } from 'components/Container/Box';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registr } from 'redux/auth/operations';



const Registration = () => {
	const dispatch = useDispatch();

	const {
	  register,
	  handleSubmit,
	  reset,
	  formState: { errors, isValid },
	} = useForm({
	  mode: 'all',
	});
	const onRegSubmit = data => {
	  console.log(data.username);
	  console.log(data.email);
	  console.log(data.password);
	  dispatch(registr({
		name: data.username,
		email: data.email,
		password: data.password
	  }
	));
	//   const { name, username } = data;
	//   console.log(name, phone);
	//   if (contacts.find(item => item.name === name)) {
	// 	 return alert('this name alredy exist');
	//   }
	//   if (contacts.find(item => item.phone === phone)) {
	// 	 return alert('this number alredy exist');
	//   }
		reset();
	};
  return (
	<div style={{padding: "15px"}}>
	 <Box
	 m="0 auto"
	maxWidth="500px"
	background="rgb(136, 136, 136, 0.9)"
	borderRadius="12px"
	p="20px"
	boxShadow="3px 4px 3px #888888">
		
		 <Forms onSubmit={handleSubmit(onRegSubmit)}>
        <FildName htmlFor="username">
          Username
          <EnterName
            {...register('username', {
              required: 'please enter name',
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                message:
                  'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan',
              },
            })}
            id="username"
            type="text"
            name="username"
            placeholder="username"
          />
        </FildName>
        {errors?.username && (
          <span style={{ display: 'block', marginBottom: 5, color: 'red' }}>
            {errors?.username?.message || 'Error'}
          </span>
        )}
        <FildName htmlFor="email">
          Email
          <EnterName
            {...register('email', {
              required: 'please enter email',
				  pattern: {
					value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
					message: 'incorrect mail form',
				  }
   
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
              required: 'enter password',
					minLength: {
						value: 6,
						message: 'not less then 6 numbers',
					}
            })}
            id="password"
            type="password"
            name="password"
            placeholder="*******"
          />
        </FildName>
		  <span style={{ display: 'block', marginBottom: 5, color: 'red' }}>
            {errors?.password?.message }
          </span>
        <Button type="submit" disabled={!isValid}>
         Sign up
        </Button>
      </Forms>
		
	 </Box>
	 </div>
  )
}

export default Registration
