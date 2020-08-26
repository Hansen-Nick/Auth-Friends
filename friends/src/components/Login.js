import React from 'react'
import useForm from 'react-hook-form'
import axios from 'axios'

const Login = (props) => {

  const {register, handleSubmit} = useForm();

  const onSubmit = (values) => {
    axios.post('http://localhost:5000/api/login', {'username': values.username, 'password': values.password })
    .then( res => {
      localStorage.setItem('token', res.data.payload);
      props.history.push('/friendsprotected')
    })
  }
   
  return(
    <form onSubmit={handleSubmit(onSubmit)} className='pure-form'>
      <p className='form-header'>Please log in to continue!</p>
      <input ref={register} name='username' placeholder='Username'/>
      <input ref={register} name='password' placeholder='Password'/>
      <button className='pure-button' type='submit'>Submit!</button>
    </form>
  )
}

export default Login