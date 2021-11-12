import { Suspense } from "react";
import './App.css';
import LanguageSelect from './components/LanguageSelector/LanguageSelect'
import Home from "./view/index"
import Footer from "./view/Home/Section/Footer";
import Login from "./view/Login";
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
