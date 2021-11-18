import { Link } from 'react-router-dom';

import './buttoncomp.css';

const ButtonComponent = ({ type, title, link, onPress, style }) => {
    let contect = null;
    switch (type) {
        case 'submit_button':
            contect = (
                <div style={style} className="button">
                    {title}
                </div>
            );
            return contect;
        default:
            contect = null;
    }

    return link ? (
        <Link to={link} className="button" style={style}>
            {title}
        </Link>
    ) : onPress ? (
        <div onClick={onPress} style={style} className="button">
            {title}
        </div>
    ) : null;
};

export default ButtonComponent;
