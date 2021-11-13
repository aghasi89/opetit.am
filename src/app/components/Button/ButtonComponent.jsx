//COMPONENTS
import { Link } from 'react-router-dom';

//CSS
import './buttonComp.css';

const ButtonComponent = ({ type, link, onPress, title }) => {
    let content = null;
    switch (type) {
        case 'outline':
            content = <div className="button outline_btn">{title}</div>;
            return content;
        case 'big_button':
            content = <div className="button big_btn">{title}</div>;
            return content;
        case 'small_button':
            content = <div className="button small_btn">{title}</div>;
            return content;
        default:
    }

    return link ? (
        <Link to={link} className="button big_btn">
            {title}
        </Link>
    ) : onPress ? (
        <div onClick={onPress} className="button big_btn">
            {title}
        </div>
    ) : null;
};

export default ButtonComponent;
