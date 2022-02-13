import { useState } from 'react';
import { signIn, signUp } from '../services/fetch-utils';

export default function AuthPage({ setUser }){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e){
    e.preventDefault();
    const user = await signIn(email, password);

    console.log(user);
    setUser(user);
  }
  
  async function handleSignUp(e){
    e.preventDefault();
    const user = await signUp(email, password);
    console.log(user);
    setUser(user);
  }

  return <div className='auth'>
    <h2><em>RPG Weapon Inventory</em></h2>

    <form >
      <label onSubmit={handleSignIn}>
        Email
        <input required value={email} type='email' name='email' onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Password
        <input required value={password} type='password' name='password' onChange={e => setPassword(e.target.value)}/>
      </label>
      <div className="button-div">
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </form>
  </div>; 
}