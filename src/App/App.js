import { Suspense } from "react";
import './App.css';
import NavMenu from './NavMenu/NavMenu';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>....Loading</div>}>
      <NavMenu/>
      </Suspense>
    </div>
  );
}

export default App;
