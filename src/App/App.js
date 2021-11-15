import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import { Header } from './Components';
import { AboutUs, Boxes, Home, Login, Register, Services } from './View';


function App() {
  return (
    <div className="App">
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
