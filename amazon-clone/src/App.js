import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from './Login.js';
import Payment from './Payment.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";

import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51IqetrSE8kIgr16GmqmEUvd565Ip5qqZsqXsDH6U7Bi2zqN6AiJrw2xA5OgxaKnRoMe53LgCozscXklqmUqf94Qu00qkg1EM8c');

function App() {

  const [{}, dispatch ] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged( authUser =>{
      console.log("THE USER: ",authUser);

      if(authUser){
        //the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    //BEM naming convention
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payments">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>          
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
