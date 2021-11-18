import React from 'react';
import './App.css';
//import Modal from './components/Modal';
// import body from './components/Modal/ConfirmModal';
// import ModalHook from './components/Modal/ModalHook';

import { Redirect, Route, Switch } from 'react-router';

import { Header } from './Components';
import { AboutUs, Boxes, Home, Login, Register, Services } from './View';
import TestRegister from './View/TestRegister/TestRegister';
import { ToastContainer } from "react-toastify";



function App() {

  //const {openModal, closeModal, modalIsOpen } = ModalHook()
 
  return (
    <div className="App">
        {/* <button onClick={openModal}>Show Modal</button>
       <Modal onClose={closeModal} modalIsOpen={modalIsOpen} body={body}/> */}
      <ToastContainer />
      <TestRegister />
      

      {/* <Switch>
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
        </Route> */}
        {/* <Route path='/contactus'>
          <Header />
          <ContactUs />
        </Route> */}
        {/* <Route path='/login'>
          <Login />
        </Route>
        <Route path='/registration'>
          <Register />
        </Route>
        <Redirect to='/' />
      </Switch> */}
    </div>
  );
}

export default App;
