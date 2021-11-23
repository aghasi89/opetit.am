import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context';
import './buttoncomp.css';

const ButtonComponent = ({
    type,
    title,
    link,
    onPress,
    color,
    borderColor,
    title_color,
}) => {
    const theme = useContext(ThemeContext);
    const commonStyle = {};
    let contect = null;

    if (color || borderColor || title_color) {
        commonStyle.backgroundColor = theme.color[color];
        commonStyle.borderColor = theme.color[borderColor];
        commonStyle.color = theme.color[title_color];
    }

    switch (type) {
        case 'button': {
            console.log('in button case');
            contect = (
                <div style={commonStyle} className="button pointer">
                    {title}
                </div>
            );
            return contect;
        }
        case 'outline': {
            console.log('outline button case');
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
    console.log('switchic durs');

    return link ? (
        <Link to={link}>{title}</Link>
    ) : onPress ? (
        <div onClick={onPress}>{title}</div>
    ) : null;
};

export default ButtonComponent;
