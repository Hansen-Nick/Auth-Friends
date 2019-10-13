import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/AxioswithAuth';
import FriendCard from './FriendCard'
import useForm from 'react-hook-form'

export const FriendsList = () => {

  const [friends, setFriends] = useState([])
  const {register, handleSubmit} = useForm();
 
  useEffect(() => {axiosWithAuth().get('/api/friends')
    .then(res => {
      setFriends(res.data)
    })
  }, [])
      
  const onSubmit = (values) => {
    axiosWithAuth().post('http://localhost:5000/api/friends', {'id': Date.now(), 'name': values.name, 'age': values.age, 'email': values.email})
    .then( res => {
      setFriends(res.data)
    })
  }

  return(
    <div className='friends'>
       <form onSubmit={handleSubmit(onSubmit)} className='pure-form'>
        <p className='form-header'>Fill out this form to add a friend!</p>
        <input ref={register} name='name' placeholder='Name'/>
        <input ref={register} name='age' placeholder='Age' />
        <input ref={register} name='email' placeholder='Email' />
        <button className='pure-button' type='submit'>Submit!</button>
      </form>
      {friends.map( friend => <FriendCard key={friend.id} name={friend.name} age={friend.age} email={friend.email} />)}
    </div>
      )
}
