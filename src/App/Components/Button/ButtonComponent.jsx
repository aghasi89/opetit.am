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
    let content = null;

    if (color || borderColor || title_color) {
        commonStyle.backgroundColor = theme.color[color];
        commonStyle.borderColor = theme.color[borderColor];
        commonStyle.color = theme.color[title_color];
    }

    switch (type) {
        case 'button':
            {
                content = (
                    <div style={commonStyle} className="button pointer">
                        {title}
                    </div>
                );
            }
            break;
        case 'outline':
            {
                content = (
                    <div style={commonStyle} className="button pointer outline">
                        {title}
                    </div>
                );
            }
            break;
        default:
            content = content;
    }
    return link ? (
        <Link to={link}>{content}</Link>
    ) : onPress ? (
        <div onClick={onPress}>{content}</div>
    ) : null;
};

export default ButtonComponent;
