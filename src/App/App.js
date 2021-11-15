
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import { Header } from './components/index';
import store from './store';
import { AboutUs, Boxes, Home, Login, Register, Services } from './view/index';

function App() {
  return (

    <div className="App">
      <Switch>
        <Route exact path='/'>
        <Header />
        <Home/>
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
        <Route path='/contactus'>
          <Header />
          <Boxes />
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/registration'>
          <Register/>
        </Route>
        <Redirect to='/'/>      
      </Switch>
    </div>
 
  );
}

export default App;
