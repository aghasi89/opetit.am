import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context';
import './buttoncomp.css';

const ButtonComponent = ({
    button_style,
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
    let content = null;

    if (color || borderColor || title_color) {
        commonStyle.backgroundColor = theme.color[color];
        commonStyle.borderColor = theme.color[borderColor];
        commonStyle.color = theme.color[title_color];
    }

    switch (button_style) {
        case 'button': {
            content = (
                <button style={commonStyle} className="button pointer">
                    {title}
                </button>
            );
            break;
        }
        case 'outline': {
            content = (
                <button style={commonStyle} className="button pointer outline">
                    {title}
                </button>
            );
            break;
        }
        default:
            content = content;
    }
    return link ? (
        <Link to={link}>{content}</Link>
    ) : onPress ? (
        <div onClick={onPress}>{content}</div>
    ) : (
        content
    );
};

export default ButtonComponent;
