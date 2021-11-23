import { Redirect, Route, Switch } from 'react-router';
import './App.css';


import { Header } from './Components';
import { AboutUs, Boxes, Home, Login, Register, Services, } from './View';


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
     
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/registration'>
          <Register />
        </Route>
       
        <Route path='/services'>
          <Services />
        </Route>
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
