//COMPONENTS
import { Link, useHistory } from 'react-router-dom';

//CSS
import './buttonComp.css';

const ButtonComponent = ({ type, link, onPross, title }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(link);
    };
    const content = null;
    switch (type) {
        case 'outline':
            return (content = <div className="boxes_btn">{title}</div>);

        default:
            return link ? (
                <Link to={link}>{title}</Link>
            ) : onPross ? (
                <div onClick={onPross}>{title}</div>
            ) : null;
    }
};

export default ButtonComponent;
