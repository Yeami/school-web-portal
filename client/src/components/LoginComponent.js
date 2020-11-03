import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {fetchUser} from "../actions/userActions";

function LoginComponent() {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchUser({email, password}))
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <input
          type="submit"
          value="Login"
        />
      </form>
    </div>
  )
}

export default LoginComponent;