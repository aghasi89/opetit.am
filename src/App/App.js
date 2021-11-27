import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Header } from './components/index';
import { AboutUs, Boxes, Home, Login, Register, Services } from './view/index';

function App() {
  return (

    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <Switch>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
        <Route path='/about'>
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
        </Route>
        {/* <Route path='/contactus'>
          <Header />
          <ContactUs />
        </Route> */}

        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/registration'>
          <Register />
        </Route>
        <Redirect to='/' />
      </Switch>
    </div>

  );

}

export default App;
