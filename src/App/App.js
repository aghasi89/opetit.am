import * as React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import { Header } from './components';
import { AboutUs, Boxes, Home, Login, Registration, Services } from './view';
import { ToastContainer } from "react-toastify";
import UserPage from './view/UserPage';
import { useDispatch, useSelector } from 'react-redux';
import PrivatePage from './view/PrivatePage';
import { getMeAction } from './store/actions';

function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getMeAction());
  }, [])

  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route path="/panel">
          <PrivatePage>
            <Header />
            <UserPage></UserPage>
          </PrivatePage>
        </Route>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
        {/* <Route path='/about'>

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
          <Registration />
        </Route>
        <Redirect to='/' />
      </Switch>
    </div>
  );

}

export default App;
