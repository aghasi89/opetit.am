//COMPONENTS
import ButtonComponent from '../Button/ButtonComponent';

//CSS
import '../services/services.css';
import FoodsCategories from './foodsCategories/foodsCategories';

const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <h1 className="services_h1">Services</h1>
                <p className="services_p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    stand
                </p>
                <div className="categories">
                    <FoodsCategories />
                </div>
                <ButtonComponent className="services_btn" />
            </div>
        </section>
    );
};

export default Services;
