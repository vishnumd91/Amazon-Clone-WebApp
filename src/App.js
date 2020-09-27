import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
       <div className="App">
         <Switch>
           <Route path = '/checkout'>
             <h1>CHECKOUT</h1>
           </Route>

           <Route path = '/login'>
             <h1>LOGIN PAGE</h1>
           </Route>

           <Route path = '/'>
             <h1>HOMEPAGE</h1>
           </Route>
           </Switch>
       </div>
    </Router>
  );
}

export default App;
