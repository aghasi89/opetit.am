import './text.css';

const TextComponent = ({ type, content }) => {
    switch (type) {
        case 'p':
            return <p className="boxes_p">{content}</p>;
        case 'h1':
            return <h1 className="boxes_h1">{content}</h1>;
        case 'h2':
            return <h2 className="boxes_h2">{content}</h2>;
        case 'h3':
            return <h3 className="boxes_h3">{content}</h3>;
        default:
            return null;
    }
};

export default TextComponent;
