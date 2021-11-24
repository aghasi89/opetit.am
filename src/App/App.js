import React from 'react';
import './App.css';

import { Redirect, Route, Switch } from 'react-router';

import { Header } from './components';
import { AboutUs, Boxes, Home, Login, Registration, Services } from './view';
import TestRegister from './view/TestRegister/TestRegister';
import { ToastContainer } from "react-toastify";
import UserPage from './view/UserPage';

// import MyComponent from 'react-fullpage-custom-loader'

function App() {

  return (
    <div className="App">
      <ToastContainer />
        
      <Switch>
        <Route path='/panel'>
          <UserPage />
        </Route>
        <Route exact path='/'>
          <Header />
          <Home />
          {/* <MyComponent sentences loaderType="pacman" wrapperBackgroundColor="rgba(192,192,192,0.5)" className="loader"/> */}
        </Route>
        {/* <Route path='/about'>
          <Header />
          <AboutUs />
        </Route>
        <Route path='/boxes'>
          <Header />
          <Boxes />
        </Route>
        <Route path='/services'>
          <Header />
          <Services />
        </Route> */}
        {/* <Route path='/contactus'>
          <Header />
          <ContactUs />
        </Route> */}
        {/* <Route path='/login'>
          <Login />
        </Route> */}
        <Route path='/registration'>
          <Registration />
          <TestRegister />
        </Route>
        {/* <Redirect to='/' /> */}
      </Switch>
    </div>
  );
}

export default App;
