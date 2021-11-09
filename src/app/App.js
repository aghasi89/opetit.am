//COMPONENTS
import {
    Header,
    Main,
    AboutUs,
    Boxes,
    MostOrderedDishes,
    ContactUs,
    Footer,
} from './components/index';

//CSS
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <AboutUs />
            <Boxes />
            <MostOrderedDishes />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;
