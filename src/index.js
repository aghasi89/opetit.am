import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./App/store"
import { ThemeContext, Themes } from './context';
ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeContext.Provider value={Themes}>
          <App />
        </ThemeContext.Provider>
      </Router>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
