
import { Suspense } from "react";
import './App.css';
import LanguageSelect from './Components/LanguageSelector/LanguageSelect'
import Home from "./View/index"
import Footer from "./View/Home/Section/Footer";
import Login from "./View/Login";



function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>....Loading</div>}>
      <LanguageSelect/>
      </Suspense>
      <Home/>
      <Footer/>
      <Login/>
    
    </div>
  );
}

export default App;
