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
    add_class
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
                <button type={type} style={commonStyle} className="button pointer">
                    {title}
                </button>
            );
        }
        case 'outline': {
            content = (
                <button type={type} style={commonStyle} className={`button pointer outline ${add_class}`}>
                    {title}
                </button>
            );
        }
        default:
            content = content;
    }
    //console.log(content, "qqqqqqqqqqqqqqqqqqqqqqqqqqqq");
    return link ? (
        <Link to={link}>{content}</Link>
    ) : onPress ? (
        <div className="buttonConteiner" onClick={onPress}>{content}</div>
    ) : null;
};

export default ButtonComponent;
