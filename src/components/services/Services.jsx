import '../services/services.css';
import salad from '../../assets/img/png/salad.png';
import hotDish from '../../assets/img/png/serving-dish.png';
import drinks from '../../assets/img/png/cocktail.png';
import dessert from '../../assets/img/png/dessert.png';

const foodsCategories = [
    {
        pic: salad,
        name: 'Salad',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
        pic: hotDish,
        name: 'Hot dish',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
        pic: dessert,
        name: 'Dessert',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
        pic: drinks,
        name: 'Drinks',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
];

const Services = () => {
    const foodsCategoriesJSX = foodsCategories.map((item, indx) => {
        return (
            <div className="food_elem" key={indx}>
                <div className="food_elem_img">
                    <img src={item.pic} alt={item.name} />
                </div>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
            </div>
        );
    });
    return (
        <section className="services">
            <div className="container">
                <h1 className="services_h1">Services</h1>
                <p className="services_p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    stand
                </p>
                <div className="categories">{foodsCategoriesJSX}</div>
                <div className="services_btn">
                    <a href="/#" alt="login">
                        Menu
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
