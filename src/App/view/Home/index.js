import  Services  from "./Section/Services/index"
import  MostOedered  from "./Section/MostOrdered/index"
import HeaderSlide from "./Section/HeaderSlide"
import Footer from "./Section/Footer"
export default () => {
    return (<div className="HomePage " >
        {/* <HeaderSlide /> */}
        <Services/>
        <MostOedered/>
        <Footer/>
        </div>)
}