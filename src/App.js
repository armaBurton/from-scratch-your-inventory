import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage/AuthPage';

function App() {
  const [user, setUser] = useState('');

  return <Router>
    <div className="App">
      {
        !user
          ? <header></header>
          : <header>
            <Link to='#'>Dumb Link</Link>
            <Link to='#'>Dummy Link</Link>
            <Link to='#'>Dumber Link</Link>
          </header>
      }
      <main>
        <Switch>
          <Route exact path='/'>
            {
              user
                ? <Redirect to='/inventory' />
                : <AuthPage setUser={setUser} />
            }
          </Route>
        </Switch>
      </main>
    </div>
  </Router>;
}

export default App;
