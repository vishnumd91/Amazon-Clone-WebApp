import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from 'firebase';

function App() {
  const [ {}, dispatch] = useStateValue();

  // useEffect Hook is used when we need to run some operation based on a given condition
  // const unsubscribe = useEffect(() => {

  //   auth.onAuthStateChanged((authUser) => {

  //     if (authUser) {
  //       // User is logged in
  //       dispatch( {
  //         type: 'SET_USER',
  //         user: authUser,
  //       })
  //     }
  //     else {
  //       // User is logged out
  //       dispatch( {
  //         type: 'SET_USER',
  //         user: null,
  //       })
  //     }
  //   })

  //   return () => {
  //     // cleanup
  //     unsubscribe();
  //   }
  // }, [])
  // console.log('User =>', user);

  return (
    <Router>
       <div className="App">
         <Switch>
           <Route path = '/checkout'>
             <Header />
             <Checkout />
           </Route>

           <Route path = '/login'>
             <Login />
           </Route>

           <Route path = '/'>
             <Header />
             <Home />
           </Route>
           </Switch>
       </div>
    </Router>
  );
}

export default App;
