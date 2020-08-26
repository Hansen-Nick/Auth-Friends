import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import { axiosWithAuth } from './utils/AxioswithAuth';
import Home from './components/Home'
import {FriendsList} from './components/FriendsList'

function App() {

  return (
    <div className='App'>
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friendsProtected'>Friends!</Link>
          </li>
        </ul>
          <Route exact path='/' component={Home} />
          <PrivateRoute path='/friendsProtected' component={FriendsList} />
          <Route path='/login' component={Login} />
      </Router>
    </div>
  );
}

export default App;
