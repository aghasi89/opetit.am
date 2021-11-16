import React from 'react';
import './App.css';
import Header from './components/Header';
import Modal from './components/Modal';
import body from './components/Modal/ConfirmModal';
import ModalHook from './components/Modal/ModalHook';
// import Input from './components/Input';
import HeaderSlide from './view/Home/Section/HeaderSlide';

function App() {

  const {openModal, closeModal, modalIsOpen } = ModalHook()
 
  return (
    <div className="App">
       {/* <Header/>
        <HeaderSlide/> */}
        <button onClick={openModal}>Show Modal</button>
       <Modal onClose={closeModal} modalIsOpen={modalIsOpen} body={body}/>
    </div>
  );
}

export default App;