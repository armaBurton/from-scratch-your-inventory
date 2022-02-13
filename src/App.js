import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage/AuthPage';
import Inventory from './Inventory/Inventory';
import AddInventory from './AddInventory/AddInventory';
import { getUser, logout } from './services/fetch-utils';
import WeaponDetail from './WeaponDetail/WeaponDetail';

function App() {
  const [user, setUser] = useState('');
  
  useEffect(() => {
    async function getUserData(){
      const data = await getUser();
      setUser(data);
    }
    getUserData();
  }, []);

  function handleLogout(){
    logout();
    setUser('');
  }

  return <Router>
    <div className="App">
      {
        !user
          ? <header></header>
          : <header>
            <NavLink activeClassName='active' to='/inventory'>Inventory</NavLink>
            <NavLink activeClassName='active' to='/add-inventory'>Add Inventory</NavLink>
            <NavLink activeClassName='inactive' onClick={handleLogout} to='/'>Logout</NavLink>
          </header>
      }
      <main>
        <Switch>
          <Route exact path="/">
            {
              user
                ? <Redirect to='/inventory' user={user}/>
                : <AuthPage setUser={setUser} />
            }
          </Route>
          <Route exact path='/inventory'>
            {
              user
                ? <Inventory user={user}/>
                : <Redirect to='/' />
            }
          </Route>
          <Route exact path='/inventory/:id'>
            {
              user
                ? <WeaponDetail />
                : <Redirect to='/' />
            }
          </Route>
          <Route exact path='/add-inventory'>
            {
              user
                ? <AddInventory user={user}/>
                : <Redirect to='/' />
            }
          </Route>
        </Switch>
      </main>
    </div>
  </Router>;
}

export default App;