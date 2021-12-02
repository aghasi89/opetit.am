import ContactUs from "./Section/ContactUs/index";
import HeaderSlide from "./Section/HeaderSlide";
import MostOrdered from "./Section/MostOrdered";
import About from "./Section/About"
import Boxes from "./Section/Boxes"
export default () => {
    return (
        <div className="conatainer">
            <HeaderSlide />
            <About />
            <Boxes />
            <MostOrdered />
            <ContactUs />
        </div>)
}

