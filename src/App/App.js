import { Suspense } from "react";
import './App.css';
import LanguageSelect from './Components/LanguageSelector/LanguageSelect'
import Home from"./View/index"
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>....Loading</div>}>
      <LanguageSelect/>
      </Suspense>
      <Home/>
    </div>
  );
}

export default App;
