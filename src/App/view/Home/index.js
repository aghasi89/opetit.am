import ContactUs from "./Section/ContactUs/index";
import HeaderSlide from "./Section/HeaderSlide";
import MostOrdered from "./Section/MostOrdered";
import About from "./Section/About";
import Boxes from "./Section/Boxes";
import Services from "./Section/Services/index";
import Footer from "./Section/Footer";


export default () => {
    return (
        <div className="conatainer">
            <HeaderSlide />
            <About />
            <Boxes />
            <Services />
            <MostOrdered />
            <ContactUs />
            <Footer />
        </div>)

}


