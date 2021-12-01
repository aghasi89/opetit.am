import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Header } from './components';
import { Boxes, Home, Login, Registration, Services } from './view';

import './App.css';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Header />
                    <Home />
                </Route>
                <Route path="/about">
                    <Header />
                    {/* <AboutUs /> */}
                </Route>
                <Route path="/boxes">
                    <Header />
                    <Boxes />
                </Route>
                <Route path="/services">
                    <Header />
                    <Services />
                </Route>
                {/* <Route path='/contactus'>
          <Header />
          <ContactUs />
        </Route> */}
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/registration">
                    <Registration />
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
