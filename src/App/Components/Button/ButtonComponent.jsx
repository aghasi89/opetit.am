import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context';
import './buttoncomp.css';

const ButtonComponent = ({ type, title, link, onPress, color }) => {
    const theme = useContext(ThemeContext);
    const commonStyle = {};
    let contect = null;

    if (color) {
        commonStyle.backgroundColor = theme.color[color];
        commonStyle.borderColor = theme.color[color];
    }

    switch (type) {
        case 'button': {
            contect = (
                <div style={commonStyle} className="button pointer">
                    {title}
                </div>
            );
            return contect;
        }
        case 'outline': {
            contect = (
                <div style={commonStyle} className="button pointer outline">
                    {title}
                </div>
            );
            return contect;
        }
        default:
            contect = null;
    }

    return link ? (
        <Link to={link} style={commonStyle} className="button pointer">
            {title}
        </Link>
    ) : onPress ? (
        <div onClick={onPress} style={commonStyle} className="button pointer">
            {title}
        </div>
    ) : null;
};

export default ButtonComponent;
