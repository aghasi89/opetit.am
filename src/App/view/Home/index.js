import HeaderSlide from './Section/HeaderSlide';
import About from '../HomePage/Section/About';
import { Boxes } from '..';

export default () => {
    return (
        <div className="container">
            <HeaderSlide />
            <About />
            <Boxes />
        </div>
    );
};
