import './App.css';
import AboutUs from './components/about/AboutUs';
import Boxes from './components/boxes/Boxes';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/Footer';
import Header from './components/header/header';
import Main from './components/main/Main';
import MostOrderedDishes from './components/most_ordered_dishes/MostOrderedDishes';
import Services from './components/services/Services';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <AboutUs />
            <Boxes />
            <Services />
            <MostOrderedDishes />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;
