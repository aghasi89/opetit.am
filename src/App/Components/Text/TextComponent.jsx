//COMPONENTS
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../../context';

//CSS
import './textcomp.css';

const TextComponent = ({ type, title, onPress, link, color }) => {
    const theme = useContext(ThemeContext);
    let commonStyle = {};
    if (color) {
        commonStyle.color = theme.color[color];
    }
    switch (type) {
        case 'p':
            return (
                <p className="text_main" style={commonStyle}>
                    {title}
                </p>
            );
        case 'span':
            return (
                <span className="text_main span_text" style={commonStyle}>
                    {title}
                </span>
            );
        case 'h1':
            return (
                <h1 className="text_main h1_text" style={commonStyle}>
                    {title}
                </h1>
            );
        case 'h2':
            return (
                <h2 className="text_main h2_text" style={commonStyle}>
                    {title}
                </h2>
            );
        case 'h3':
            return (
                <h3 className="text_main h3_text" style={commonStyle}>
                    {title}
                </h3>
            );
        case 'link':
            return (
                <Link className="" to={link} style={commonStyle}>
                    {title}
                </Link>
            );
        default:
            break;
    }

    return link ? (
        <Link to={link}>{title}</Link>
    ) : onPress ? (
        <div onClick={onPress}>{title}</div>
    ) : null;
};

export default TextComponent;
