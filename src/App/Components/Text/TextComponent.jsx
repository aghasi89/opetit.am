import { Link } from 'react-router-dom';
import './textcomp.css';

const TextComponent = ({ type, title, onPress, link, style }) => {
    switch (type) {
        case 'baisic_text':
            return (
                <p className="text_main" style={style}>
                    {title}
                </p>
            );
        case 'h1':
            return <h1 className="">{title}</h1>;
        case 'h2':
            return <h2 className="">{title}</h2>;
        case 'h3':
            return <h3 className="">{title}</h3>;
        case 'h4':
            return <h3 className="">{title}</h3>;
        case 'link':
            return <Link className="">{title}</Link>;
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
